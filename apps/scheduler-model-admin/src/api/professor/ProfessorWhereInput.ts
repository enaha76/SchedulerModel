import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfessorAssignmentListRelationFilter } from "../professorAssignment/ProfessorAssignmentListRelationFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { WeeklyProfessorAvailabilityListRelationFilter } from "../weeklyProfessorAvailability/WeeklyProfessorAvailabilityListRelationFilter";

export type ProfessorWhereInput = {
  department?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
  professorAssignments?: ProfessorAssignmentListRelationFilter;
  schedule?: ScheduleListRelationFilter;
  weeklyProfessorAvailability?: WeeklyProfessorAvailabilityListRelationFilter;
};
