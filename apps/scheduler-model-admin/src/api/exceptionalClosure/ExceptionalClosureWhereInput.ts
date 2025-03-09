import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { AcademicWeekWhereUniqueInput } from "../academicWeek/AcademicWeekWhereUniqueInput";

export type ExceptionalClosureWhereInput = {
  id?: IntFilter;
  reason?: StringNullableFilter;
  timeSlot?: TimeSlotWhereUniqueInput;
  week?: AcademicWeekWhereUniqueInput;
};
