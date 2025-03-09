import { WeeklyTeachingLoad as TWeeklyTeachingLoad } from "../api/weeklyTeachingLoad/WeeklyTeachingLoad";

export const WEEKLYTEACHINGLOAD_TITLE_FIELD = "teachingType";

export const WeeklyTeachingLoadTitle = (
  record: TWeeklyTeachingLoad
): string => {
  return record.teachingType?.toString() || String(record.id);
};
