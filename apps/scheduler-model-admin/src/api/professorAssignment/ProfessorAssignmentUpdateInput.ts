import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { ProfessorWhereUniqueInput } from "../professor/ProfessorWhereUniqueInput";

export type ProfessorAssignmentUpdateInput = {
  course?: CourseWhereUniqueInput;
  group?: GroupWhereUniqueInput;
  professor?: ProfessorWhereUniqueInput;
  teachingType?: string;
};
