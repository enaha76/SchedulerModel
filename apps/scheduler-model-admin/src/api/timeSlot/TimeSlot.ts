import { ExceptionalClosure } from "../exceptionalClosure/ExceptionalClosure";
import { Schedule } from "../schedule/Schedule";
import { WeeklyProfessorAvailability } from "../weeklyProfessorAvailability/WeeklyProfessorAvailability";

export type TimeSlot = {
  dayOfWeek: number;
  endTime: Date;
  exceptionalClosures?: Array<ExceptionalClosure>;
  id: number;
  schedule?: Array<Schedule>;
  slotIndex: number;
  startTime: Date;
  weeklyProfessorAvailability?: Array<WeeklyProfessorAvailability>;
};
