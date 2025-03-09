import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SchedulerService {
  constructor(protected readonly prisma: PrismaService) {}

  /**
   * Transform data for scheduler model based on week ID
   * This replicates the Python fetch_and_transform_data_for_scheduler function
   */
  async transformDataForScheduler(weekId: number) {
    try {
      // Verify the week exists
      const week = await this.prisma.academicWeek.findUnique({
        where: { id: weekId },
      });
      
      if (!week) {
        throw new Error(`Academic week with ID ${weekId} not found`);
      }

      console.log(`Fetching data for week: ${week.name}`);

      // Fetch all required data
      const courses = await this.prisma.course.findMany();
      const groups = await this.prisma.group.findMany();
      const professors = await this.prisma.professor.findMany();
      const timeSlots = await this.prisma.timeSlot.findMany({
        orderBy: { slotIndex: 'asc' },
      });
      const teachingLoads = await this.prisma.weeklyTeachingLoad.findMany({
        where: { weekId },
      });
      const profAssignments = await this.prisma.professorAssignment.findMany();
      const profAvailability = await this.prisma.weeklyProfessorAvailability.findMany({
        where: { weekId },
      });
      const groupOverlaps = await this.prisma.groupOverlap.findMany({
        where: { canOverlap: false },
      });
      const rooms = await this.prisma.room.findMany();
      const closures = await this.prisma.exceptionalClosure.findMany({
        where: { weekId },
      });

      // Count rooms by type
      const generalRooms = rooms.filter(room => room.typeField === 'general').length;
      const tpRooms = rooms.filter(room => room.typeField === 'TP').length;

      console.log(`Found ${courses.length} courses, ${groups.length} groups, ${professors.length} professors`);
      console.log(`Available rooms: ${generalRooms} general, ${tpRooms} lab rooms`);

      // TRANSFORM DATA FOR SCHEDULER

      // Basic counts
      const J = courses.length;  // Number of courses
      const G = groups.length;   // Number of groups
      const I = professors.length;  // Number of professors
      const K = timeSlots.length;  // Number of time slots
      const S = generalRooms;  // Number of general classrooms
      const STP = tpRooms;     // Number of TP (lab) rooms

      // Lists of names
      const courseNames = courses.map(course => course.name);
      const groupNames = groups.map(group => group.name);
      const professorNames = professors.map(prof => prof.name);

      // ID to index mappings
      const courseIdToIndex = Object.fromEntries(courses.map((course, i) => [course.id, i]));
      const groupIdToIndex = Object.fromEntries(groups.map((group, i) => [group.id, i]));
      const professorIdToIndex = Object.fromEntries(professors.map((prof, i) => [prof.id, i]));

      // Initialize teaching load matrices
      const Pcm: number[][] = Array(J).fill(0).map(() => Array(G).fill(0));
      const Ptp: number[][] = Array(J).fill(0).map(() => Array(G).fill(0));
      const Ptd: number[][] = Array(J).fill(0).map(() => Array(G).fill(0));

      // Fill teaching load matrices
      for (const load of teachingLoads) {
        const courseIdx = courseIdToIndex[load.courseId];
        const groupIdx = groupIdToIndex[load.groupId];

        if (courseIdx !== undefined && groupIdx !== undefined) {
          if (load.teachingType === "CM") {
            Pcm[courseIdx][groupIdx] = load.hoursRequired;
          } else if (load.teachingType === "TP") {
            Ptp[courseIdx][groupIdx] = load.hoursRequired;
          } else if (load.teachingType === "TD") {
            Ptd[courseIdx][groupIdx] = load.hoursRequired;
          }
        }
      }

      // Initialize professor assignment lists
      // Fix: Add explicit type annotations to prevent TypeScript errors
      const Ccm: number[][][] = Array(I).fill(0).map(() => [] as number[][]);
      const Ctp: number[][][] = Array(I).fill(0).map(() => [] as number[][]);
      const Ctd: number[][][] = Array(I).fill(0).map(() => [] as number[][]);

      // Fill professor assignments
      for (const assignment of profAssignments) {
        const profIdx = professorIdToIndex[assignment.professorId];
        const courseIdx = courseIdToIndex[assignment.courseId];
        const groupIdx = groupIdToIndex[assignment.groupId];

        if (profIdx !== undefined && courseIdx !== undefined && groupIdx !== undefined) {
          if (assignment.teachingType === "CM") {
            Ccm[profIdx].push([groupIdx, courseIdx]);
          } else if (assignment.teachingType === "TP") {
            Ctp[profIdx].push([groupIdx, courseIdx]);
          } else if (assignment.teachingType === "TD") {
            Ctd[profIdx].push([groupIdx, courseIdx]);
          }
        }
      }

      // Initialize professor availability matrix (default to unavailable)
      const Dik: number[][] = Array(I).fill(0).map(() => Array(K).fill(0));

      // Fill professor availability
      for (const avail of profAvailability) {
        const profIdx = professorIdToIndex[avail.professorId];
        const timeSlotId = avail.timeSlotId;
        const timeSlotIdx = timeSlots.findIndex(slot => slot.id === timeSlotId);

        if (profIdx !== undefined && timeSlotIdx !== -1) {
          Dik[profIdx][timeSlotIdx] = avail.isAvailable ? 1 : 0;
        }
      }

      // Apply closures to availability
      for (const closure of closures) {
        const timeSlotId = closure.timeSlotId;
        const timeSlotIdx = timeSlots.findIndex(slot => slot.id === timeSlotId);

        if (timeSlotIdx !== -1) {
          // Make all professors unavailable for this time slot
          for (let i = 0; i < I; i++) {
            Dik[i][timeSlotIdx] = 0;
          }
        }
      }

      // Group overlaps
      const A: number[][] = [];
      for (const overlap of groupOverlaps) {
        const group1Idx = groupIdToIndex[overlap.group1Id];
        const group2Idx = groupIdToIndex[overlap.group2Id];

        if (group1Idx !== undefined && group2Idx !== undefined) {
          A.push([group1Idx, group2Idx]);
        }
      }

      // Create the data dictionary for the scheduler
      const schedulerData = {
        J,
        G,
        I,
        K,
        S,
        STP,
        courses: courseNames,
        groups: groupNames,
        professors: professorNames,
        Pcm,
        Ptp,
        Ptd,
        Ccm,
        Ctp,
        Ctd,
        Dik,
        A,
        // Store original DB data for reference
        _db_data: {
          week,
          courses,
          groups,
          professors,
          time_slots: timeSlots,
          teaching_loads: teachingLoads,
          prof_assignments: profAssignments,
          prof_availability: profAvailability,
          group_overlaps: groupOverlaps,
          rooms,
          closures
        }
      };

      console.log("Data successfully transformed for scheduler");
      return schedulerData;
    } catch (error) {
      console.error(`Error transforming data: ${error}`);
      throw error;
    }
  }

  /**
   * Store a schedule result in the database
   */
  async storeScheduleResults(weekId: number, solution: any) {
    try {
      // Validate weekId
      const week = await this.prisma.academicWeek.findUnique({
        where: { id: weekId },
      });
      
      if (!week) {
        throw new Error(`Academic week with ID ${weekId} not found`);
      }
      
      // First, create a new scheduleSolution record
      const scheduleSolution = await this.prisma.scheduleSolution.create({
        data: {
          weekId: weekId,
          status: solution.status,
          statistics: solution.statistics || {},
          isSelected: false
        }
      });
      
      // Prepare transactions to insert schedule items
      const createOperations = [];
      
      // Process schedule data
      for (const slot of solution.schedule) {
        // Parse time slot to get day and time
        const [day, time] = slot.time_slot.split(' ', 2);
        
        // Find timeSlot ID
        // Convert time string like "8:00-9:30" to a time string like "08:00:00"
        const startTimeStr = time.split('-')[0].trim();
        const [hour, minute] = startTimeStr.split(':').map((num: string) => parseInt(num, 10));
        const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00`;
        
        const timeSlot = await this.prisma.timeSlot.findFirst({
          where: {
            dayOfWeek: this.dayToNumber(day),
            // Find the time slot that matches the day and start time
            startTime: new Date(`1970-01-01T${formattedTime}`)
          }
        });
        
        if (!timeSlot) {
          console.warn(`TimeSlot not found for: ${slot.time_slot}`);
          continue;
        }
        
        // Process each session in this time slot
        for (const session of slot.sessions) {
          // Find entity IDs
          const course = await this.prisma.course.findFirst({
            where: { name: session.course }
          });
          
          const group = await this.prisma.group.findFirst({
            where: { name: session.group }
          });
          
          const professor = await this.prisma.professor.findFirst({
            where: { name: session.professor }
          });
          
          // Find an appropriate room based on teaching type
          const roomType = session.type === 'TP' ? 'TP' : 'general';
          const room = await this.prisma.room.findFirst({
            where: { typeField: roomType }
          });
          
          if (!course || !group || !professor || !room) {
            console.warn(`Missing entity for session: ${JSON.stringify(session)}`);
            continue;
          }
          
          // Create schedule entry - now with scheduleSolutionId
          createOperations.push(
            this.prisma.schedule.create({
              data: {
                courseId: course.id,
                groupId: group.id,
                professorId: professor.id,
                roomId: room.id,
                timeSlotId: timeSlot.id,
                weekId: weekId,
                teachingType: session.type,
                scheduleSolutionId: scheduleSolution.id // Link to the solution
              }
            })
          );
        }
      }
      
      // Execute all create operations in a transaction
      if (createOperations.length > 0) {
        await this.prisma.$transaction(createOperations);
        return {
          success: true,
          message: `Created ${createOperations.length} schedule entries for week ${weekId}`,
          scheduleSolutionId: scheduleSolution.id
        };
      } else {
        // If no entries were created, delete the scheduleSolution
        await this.prisma.scheduleSolution.delete({
          where: { id: scheduleSolution.id }
        });
        
        return {
          success: false,
          message: 'No schedule entries created'
        };
      }
    } catch (error) {
      console.error(`Error storing schedule: ${error}`);
      throw error;
    }
  }

  // Helper method to convert day name to number
  private dayToNumber(day: string): number {
    const days: Record<string, number> = {
      'Monday': 1,
      'Tuesday': 2,
      'Wednesday': 3,
      'Thursday': 4,
      'Friday': 5,
      'Saturday': 6,
      'Sunday': 0
    };
    
    // Check if the day exists in our mapping
    if (day in days) {
      return days[day as keyof typeof days];
    }
    
    // Default to 0 if day is not found
    return 0;
  }
}