import { Professor as TProfessor } from "../api/professor/Professor";

export const PROFESSOR_TITLE_FIELD = "name";

export const ProfessorTitle = (record: TProfessor): string => {
  return record.name?.toString() || String(record.id);
};
