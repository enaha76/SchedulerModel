import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { AcademicWeekWhereUniqueInput } from "../academicWeek/AcademicWeekWhereUniqueInput";

export type ExceptionalClosureCreateInput = {
  reason?: string | null;
  timeSlot: TimeSlotWhereUniqueInput;
  week: AcademicWeekWhereUniqueInput;
};
