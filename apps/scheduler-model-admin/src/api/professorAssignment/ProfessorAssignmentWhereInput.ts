import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { ProfessorWhereUniqueInput } from "../professor/ProfessorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ProfessorAssignmentWhereInput = {
  course?: CourseWhereUniqueInput;
  group?: GroupWhereUniqueInput;
  id?: IntFilter;
  professor?: ProfessorWhereUniqueInput;
  teachingType?: StringFilter;
};
