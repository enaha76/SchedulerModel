import { ProfessorAssignmentUpdateManyWithoutProfessorsInput } from "./ProfessorAssignmentUpdateManyWithoutProfessorsInput";
import { ScheduleUpdateManyWithoutProfessorsInput } from "./ScheduleUpdateManyWithoutProfessorsInput";
import { WeeklyProfessorAvailabilityUpdateManyWithoutProfessorsInput } from "./WeeklyProfessorAvailabilityUpdateManyWithoutProfessorsInput";

export type ProfessorUpdateInput = {
  department?: string | null;
  email?: string | null;
  name?: string;
  professorAssignments?: ProfessorAssignmentUpdateManyWithoutProfessorsInput;
  schedule?: ScheduleUpdateManyWithoutProfessorsInput;
  weeklyProfessorAvailability?: WeeklyProfessorAvailabilityUpdateManyWithoutProfessorsInput;
};
