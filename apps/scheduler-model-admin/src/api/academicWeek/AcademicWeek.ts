import { ExceptionalClosure } from "../exceptionalClosure/ExceptionalClosure";
import { Schedule } from "../schedule/Schedule";
import { WeeklyProfessorAvailability } from "../weeklyProfessorAvailability/WeeklyProfessorAvailability";
import { WeeklyTeachingLoad } from "../weeklyTeachingLoad/WeeklyTeachingLoad";

export type AcademicWeek = {
  active: boolean;
  endDate: Date;
  exceptionalClosures?: Array<ExceptionalClosure>;
  id: number;
  locked: boolean;
  name: string;
  schedule?: Array<Schedule>;
  startDate: Date;
  weeklyProfessorAvailability?: Array<WeeklyProfessorAvailability>;
  weeklyTeachingLoads?: Array<WeeklyTeachingLoad>;
};
