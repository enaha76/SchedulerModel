import { ProfessorAssignmentUpdateManyWithoutCoursesInput } from "./ProfessorAssignmentUpdateManyWithoutCoursesInput";
import { ScheduleUpdateManyWithoutCoursesInput } from "./ScheduleUpdateManyWithoutCoursesInput";
import { WeeklyTeachingLoadUpdateManyWithoutCoursesInput } from "./WeeklyTeachingLoadUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  code?: string;
  name?: string;
  professorAssignments?: ProfessorAssignmentUpdateManyWithoutCoursesInput;
  schedule?: ScheduleUpdateManyWithoutCoursesInput;
  semester?: number;
  specialization?: string;
  weeklyTeachingLoads?: WeeklyTeachingLoadUpdateManyWithoutCoursesInput;
};
