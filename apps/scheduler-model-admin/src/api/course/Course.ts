import { ProfessorAssignment } from "../professorAssignment/ProfessorAssignment";
import { Schedule } from "../schedule/Schedule";
import { WeeklyTeachingLoad } from "../weeklyTeachingLoad/WeeklyTeachingLoad";

export type Course = {
  code: string;
  id: number;
  name: string;
  professorAssignments?: Array<ProfessorAssignment>;
  schedule?: Array<Schedule>;
  semester: number;
  specialization: string;
  weeklyTeachingLoads?: Array<WeeklyTeachingLoad>;
};
