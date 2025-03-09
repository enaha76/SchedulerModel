import { ProfessorAssignmentCreateNestedManyWithoutProfessorsInput } from "./ProfessorAssignmentCreateNestedManyWithoutProfessorsInput";
import { ScheduleCreateNestedManyWithoutProfessorsInput } from "./ScheduleCreateNestedManyWithoutProfessorsInput";
import { WeeklyProfessorAvailabilityCreateNestedManyWithoutProfessorsInput } from "./WeeklyProfessorAvailabilityCreateNestedManyWithoutProfessorsInput";

export type ProfessorCreateInput = {
  department?: string | null;
  email?: string | null;
  name: string;
  professorAssignments?: ProfessorAssignmentCreateNestedManyWithoutProfessorsInput;
  schedule?: ScheduleCreateNestedManyWithoutProfessorsInput;
  weeklyProfessorAvailability?: WeeklyProfessorAvailabilityCreateNestedManyWithoutProfessorsInput;
};
