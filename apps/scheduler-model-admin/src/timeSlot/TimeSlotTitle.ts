import { TimeSlot as TTimeSlot } from "../api/timeSlot/TimeSlot";

export const TIMESLOT_TITLE_FIELD = "id";

export const TimeSlotTitle = (record: TTimeSlot): string => {
  return record.id?.toString() || String(record.id);
};
