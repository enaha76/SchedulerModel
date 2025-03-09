import { ProfessorWhereUniqueInput } from "../professor/ProfessorWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { AcademicWeekWhereUniqueInput } from "../academicWeek/AcademicWeekWhereUniqueInput";

export type WeeklyProfessorAvailabilityCreateInput = {
  isAvailable: boolean;
  professor: ProfessorWhereUniqueInput;
  timeSlot: TimeSlotWhereUniqueInput;
  week: AcademicWeekWhereUniqueInput;
};
