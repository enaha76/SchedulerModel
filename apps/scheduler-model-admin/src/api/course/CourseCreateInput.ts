import { ProfessorAssignmentCreateNestedManyWithoutCoursesInput } from "./ProfessorAssignmentCreateNestedManyWithoutCoursesInput";
import { ScheduleCreateNestedManyWithoutCoursesInput } from "./ScheduleCreateNestedManyWithoutCoursesInput";
import { WeeklyTeachingLoadCreateNestedManyWithoutCoursesInput } from "./WeeklyTeachingLoadCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  code: string;
  name: string;
  professorAssignments?: ProfessorAssignmentCreateNestedManyWithoutCoursesInput;
  schedule?: ScheduleCreateNestedManyWithoutCoursesInput;
  semester: number;
  specialization: string;
  weeklyTeachingLoads?: WeeklyTeachingLoadCreateNestedManyWithoutCoursesInput;
};
