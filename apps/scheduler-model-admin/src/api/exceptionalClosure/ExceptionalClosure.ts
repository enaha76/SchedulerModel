import { TimeSlot } from "../timeSlot/TimeSlot";
import { AcademicWeek } from "../academicWeek/AcademicWeek";

export type ExceptionalClosure = {
  id: number;
  reason: string | null;
  timeSlot?: TimeSlot;
  week?: AcademicWeek;
};
