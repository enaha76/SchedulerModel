import { Schedule as TSchedule } from "../api/schedule/Schedule";

export const SCHEDULE_TITLE_FIELD = "teachingType";

export const ScheduleTitle = (record: TSchedule): string => {
  return record.teachingType?.toString() || String(record.id);
};
