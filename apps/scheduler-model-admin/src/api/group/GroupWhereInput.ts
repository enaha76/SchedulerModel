import { GroupOverlapListRelationFilter } from "../groupOverlap/GroupOverlapListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfessorAssignmentListRelationFilter } from "../professorAssignment/ProfessorAssignmentListRelationFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { WeeklyTeachingLoadListRelationFilter } from "../weeklyTeachingLoad/WeeklyTeachingLoadListRelationFilter";

export type GroupWhereInput = {
  groupOverlaps1?: GroupOverlapListRelationFilter;
  groupOverlaps2?: GroupOverlapListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
  professorAssignments?: ProfessorAssignmentListRelationFilter;
  schedule?: ScheduleListRelationFilter;
  semester?: IntFilter;
  specialization?: StringFilter;
  weeklyTeachingLoads?: WeeklyTeachingLoadListRelationFilter;
};
