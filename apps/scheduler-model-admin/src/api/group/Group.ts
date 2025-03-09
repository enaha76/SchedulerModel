import { GroupOverlap } from "../groupOverlap/GroupOverlap";
import { ProfessorAssignment } from "../professorAssignment/ProfessorAssignment";
import { Schedule } from "../schedule/Schedule";
import { WeeklyTeachingLoad } from "../weeklyTeachingLoad/WeeklyTeachingLoad";

export type Group = {
  groupOverlaps1?: Array<GroupOverlap>;
  groupOverlaps2?: Array<GroupOverlap>;
  id: number;
  name: string;
  professorAssignments?: Array<ProfessorAssignment>;
  schedule?: Array<Schedule>;
  semester: number;
  specialization: string;
  weeklyTeachingLoads?: Array<WeeklyTeachingLoad>;
};
