import { Professor } from "../professor/Professor";
import { TimeSlot } from "../timeSlot/TimeSlot";
import { AcademicWeek } from "../academicWeek/AcademicWeek";

export type WeeklyProfessorAvailability = {
  id: number;
  isAvailable: boolean;
  professor?: Professor;
  timeSlot?: TimeSlot;
  week?: AcademicWeek;
};
