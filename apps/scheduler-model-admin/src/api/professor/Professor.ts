import { ProfessorAssignment } from "../professorAssignment/ProfessorAssignment";
import { Schedule } from "../schedule/Schedule";
import { WeeklyProfessorAvailability } from "../weeklyProfessorAvailability/WeeklyProfessorAvailability";

export type Professor = {
  department: string | null;
  email: string | null;
  id: number;
  name: string;
  professorAssignments?: Array<ProfessorAssignment>;
  schedule?: Array<Schedule>;
  weeklyProfessorAvailability?: Array<WeeklyProfessorAvailability>;
};
