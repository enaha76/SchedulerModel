import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { AcademicWeekWhereUniqueInput } from "../academicWeek/AcademicWeekWhereUniqueInput";

export type ExceptionalClosureUpdateInput = {
  reason?: string | null;
  timeSlot?: TimeSlotWhereUniqueInput;
  week?: AcademicWeekWhereUniqueInput;
};
