import { AcademicWeek as TAcademicWeek } from "../api/academicWeek/AcademicWeek";

export const ACADEMICWEEK_TITLE_FIELD = "name";

export const AcademicWeekTitle = (record: TAcademicWeek): string => {
  return record.name?.toString() || String(record.id);
};
