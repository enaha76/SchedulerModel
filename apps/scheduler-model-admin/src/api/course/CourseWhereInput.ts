import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ProfessorAssignmentListRelationFilter } from "../professorAssignment/ProfessorAssignmentListRelationFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { WeeklyTeachingLoadListRelationFilter } from "../weeklyTeachingLoad/WeeklyTeachingLoadListRelationFilter";

export type CourseWhereInput = {
  code?: StringFilter;
  id?: IntFilter;
  name?: StringFilter;
  professorAssignments?: ProfessorAssignmentListRelationFilter;
  schedule?: ScheduleListRelationFilter;
  semester?: IntFilter;
  specialization?: StringFilter;
  weeklyTeachingLoads?: WeeklyTeachingLoadListRelationFilter;
};
