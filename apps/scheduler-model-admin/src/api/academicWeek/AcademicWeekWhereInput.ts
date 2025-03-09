import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ExceptionalClosureListRelationFilter } from "../exceptionalClosure/ExceptionalClosureListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { WeeklyProfessorAvailabilityListRelationFilter } from "../weeklyProfessorAvailability/WeeklyProfessorAvailabilityListRelationFilter";
import { WeeklyTeachingLoadListRelationFilter } from "../weeklyTeachingLoad/WeeklyTeachingLoadListRelationFilter";

export type AcademicWeekWhereInput = {
  active?: BooleanFilter;
  endDate?: DateTimeFilter;
  exceptionalClosures?: ExceptionalClosureListRelationFilter;
  id?: IntFilter;
  locked?: BooleanFilter;
  name?: StringFilter;
  schedule?: ScheduleListRelationFilter;
  startDate?: DateTimeFilter;
  weeklyProfessorAvailability?: WeeklyProfessorAvailabilityListRelationFilter;
  weeklyTeachingLoads?: WeeklyTeachingLoadListRelationFilter;
};
