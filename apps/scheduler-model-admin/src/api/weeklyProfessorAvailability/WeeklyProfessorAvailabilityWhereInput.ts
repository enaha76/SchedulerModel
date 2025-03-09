import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ProfessorWhereUniqueInput } from "../professor/ProfessorWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { AcademicWeekWhereUniqueInput } from "../academicWeek/AcademicWeekWhereUniqueInput";

export type WeeklyProfessorAvailabilityWhereInput = {
  id?: IntFilter;
  isAvailable?: BooleanFilter;
  professor?: ProfessorWhereUniqueInput;
  timeSlot?: TimeSlotWhereUniqueInput;
  week?: AcademicWeekWhereUniqueInput;
};
