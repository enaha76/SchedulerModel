import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateScheduleSolutionDto } from './dto/create-schedule-solution.dto';
import { UpdateScheduleSolutionDto } from './dto/update-schedule-solution.dto';

@Injectable()
export class ScheduleSolutionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: CreateScheduleSolutionDto) {
    return this.prisma.scheduleSolution.create({
      data: {
        week: { connect: { id: createDto.weekId } },
        status: createDto.status,
        statistics: createDto.statistics || {},
        isSelected: createDto.isSelected || false,
      },
      include: {
        week: true,
      },
    });
  }

  async findAll(weekId?: number) {
    const where = weekId ? { weekId } : {};
    return this.prisma.scheduleSolution.findMany({
      where,
      include: {
        week: true,
        _count: {
          select: { schedule: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const solution = await this.prisma.scheduleSolution.findUnique({
      where: { id },
      include: {
        week: true,
        schedule: {
          include: {
            course: true,
            group: true,
            professor: true,
            timeSlot: true,
            room: true,
          },
        },
      },
    });
  
    if (!solution) {
      return null;
    }
  
    // Transform the schedule entries into the desired format
    const scheduleByTimeSlot = {};
    
    // Group sessions by time slot
    for (const entry of solution.schedule) {
      // Create time slot string like "Monday 8:00-9:30"
      const dayMap = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
      };
      
      const day = dayMap[entry.timeSlot.dayOfWeek];
      const startTime = entry.timeSlot.startTime.toISOString().substring(11, 16);
      const endTime = entry.timeSlot.endTime.toISOString().substring(11, 16);
      const timeSlotStr = `${day} ${startTime}-${endTime}`;
      
      if (!scheduleByTimeSlot[timeSlotStr]) {
        scheduleByTimeSlot[timeSlotStr] = {
          time_slot: timeSlotStr,
          sessions: [],
        };
      }
      
      // Add the session
      scheduleByTimeSlot[timeSlotStr].sessions.push({
        group: entry.group.name,
        course: entry.course.name,
        type: entry.teachingType,
        professor: entry.professor.name,
      });
    }
    
    // Convert to array and sort by day and time
    const schedule = Object.values(scheduleByTimeSlot).sort((a, b) => {
      const [dayA, timeA] = a.time_slot.split(' ');
      const [dayB, timeB] = b.time_slot.split(' ');
      
      const dayOrder = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
      };
      
      // First sort by day
      if (dayOrder[dayA] !== dayOrder[dayB]) {
        return dayOrder[dayA] - dayOrder[dayB];
      }
      
      // Then by time
      return timeA.localeCompare(timeB);
    });
    
    // Create the final response
    return {
      id: solution.id,
      weekId: solution.weekId,
      status: solution.status,
      statistics: solution.statistics,
      createdAt: solution.createdAt,
      isSelected: solution.isSelected,
      week: solution.week,
      schedule: schedule,
    };
  }

  async update(id: number, updateDto: UpdateScheduleSolutionDto) {
    const data: any = {};
    
    if (updateDto.status !== undefined) {
      data.status = updateDto.status;
    }
    
    if (updateDto.statistics !== undefined) {
      data.statistics = updateDto.statistics;
    }
    
    if (updateDto.isSelected !== undefined) {
      data.isSelected = updateDto.isSelected;
    }
    
    return this.prisma.scheduleSolution.update({
      where: { id },
      data,
      include: {
        week: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.scheduleSolution.delete({
      where: { id },
      include: {
        week: true,
      },
    });
  }

  async selectSolution(id: number) {
    // Get the solution to find its week ID
    const solution = await this.prisma.scheduleSolution.findUnique({
      where: { id },
      select: { weekId: true },
    });
    
    if (!solution) {
      return null;
    }
    
    // First, deselect all solutions for this week
    await this.prisma.scheduleSolution.updateMany({
      where: { weekId: solution.weekId },
      data: { isSelected: false },
    });
    
    // Then, select the specified solution
    return this.prisma.scheduleSolution.update({
      where: { id },
      data: { isSelected: true },
      include: {
        week: true,
      },
    });
  }
}