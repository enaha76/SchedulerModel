import { ProfessorAssignment as TProfessorAssignment } from "../api/professorAssignment/ProfessorAssignment";

export const PROFESSORASSIGNMENT_TITLE_FIELD = "teachingType";

export const ProfessorAssignmentTitle = (
  record: TProfessorAssignment
): string => {
  return record.teachingType?.toString() || String(record.id);
};
