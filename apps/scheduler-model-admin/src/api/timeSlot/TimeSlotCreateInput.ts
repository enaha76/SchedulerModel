import { ExceptionalClosureCreateNestedManyWithoutTimeSlotsInput } from "./ExceptionalClosureCreateNestedManyWithoutTimeSlotsInput";
import { ScheduleCreateNestedManyWithoutTimeSlotsInput } from "./ScheduleCreateNestedManyWithoutTimeSlotsInput";
import { WeeklyProfessorAvailabilityCreateNestedManyWithoutTimeSlotsInput } from "./WeeklyProfessorAvailabilityCreateNestedManyWithoutTimeSlotsInput";

export type TimeSlotCreateInput = {
  dayOfWeek: number;
  endTime: Date;
  exceptionalClosures?: ExceptionalClosureCreateNestedManyWithoutTimeSlotsInput;
  schedule?: ScheduleCreateNestedManyWithoutTimeSlotsInput;
  slotIndex: number;
  startTime: Date;
  weeklyProfessorAvailability?: WeeklyProfessorAvailabilityCreateNestedManyWithoutTimeSlotsInput;
};
