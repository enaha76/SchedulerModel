import { SortOrder } from "../../util/SortOrder";

export type ProfessorAssignmentOrderByInput = {
  courseId?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  professorId?: SortOrder;
  teachingType?: SortOrder;
};
