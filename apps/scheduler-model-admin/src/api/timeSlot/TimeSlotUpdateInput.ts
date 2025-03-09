import { ExceptionalClosureUpdateManyWithoutTimeSlotsInput } from "./ExceptionalClosureUpdateManyWithoutTimeSlotsInput";
import { ScheduleUpdateManyWithoutTimeSlotsInput } from "./ScheduleUpdateManyWithoutTimeSlotsInput";
import { WeeklyProfessorAvailabilityUpdateManyWithoutTimeSlotsInput } from "./WeeklyProfessorAvailabilityUpdateManyWithoutTimeSlotsInput";

export type TimeSlotUpdateInput = {
  dayOfWeek?: number;
  endTime?: Date;
  exceptionalClosures?: ExceptionalClosureUpdateManyWithoutTimeSlotsInput;
  schedule?: ScheduleUpdateManyWithoutTimeSlotsInput;
  slotIndex?: number;
  startTime?: Date;
  weeklyProfessorAvailability?: WeeklyProfessorAvailabilityUpdateManyWithoutTimeSlotsInput;
};
