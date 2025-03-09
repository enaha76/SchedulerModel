import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ExceptionalClosureListRelationFilter } from "../exceptionalClosure/ExceptionalClosureListRelationFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { WeeklyProfessorAvailabilityListRelationFilter } from "../weeklyProfessorAvailability/WeeklyProfessorAvailabilityListRelationFilter";

export type TimeSlotWhereInput = {
  dayOfWeek?: IntFilter;
  endTime?: DateTimeFilter;
  exceptionalClosures?: ExceptionalClosureListRelationFilter;
  id?: IntFilter;
  schedule?: ScheduleListRelationFilter;
  slotIndex?: IntFilter;
  startTime?: DateTimeFilter;
  weeklyProfessorAvailability?: WeeklyProfessorAvailabilityListRelationFilter;
};
