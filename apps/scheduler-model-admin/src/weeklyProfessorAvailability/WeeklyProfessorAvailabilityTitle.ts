import { WeeklyProfessorAvailability as TWeeklyProfessorAvailability } from "../api/weeklyProfessorAvailability/WeeklyProfessorAvailability";

export const WEEKLYPROFESSORAVAILABILITY_TITLE_FIELD = "id";

export const WeeklyProfessorAvailabilityTitle = (
  record: TWeeklyProfessorAvailability
): string => {
  return record.id?.toString() || String(record.id);
};
