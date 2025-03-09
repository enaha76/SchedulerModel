import { ExceptionalClosureUpdateManyWithoutAcademicWeeksInput } from "./ExceptionalClosureUpdateManyWithoutAcademicWeeksInput";
import { ScheduleUpdateManyWithoutAcademicWeeksInput } from "./ScheduleUpdateManyWithoutAcademicWeeksInput";
import { WeeklyProfessorAvailabilityUpdateManyWithoutAcademicWeeksInput } from "./WeeklyProfessorAvailabilityUpdateManyWithoutAcademicWeeksInput";
import { WeeklyTeachingLoadUpdateManyWithoutAcademicWeeksInput } from "./WeeklyTeachingLoadUpdateManyWithoutAcademicWeeksInput";

export type AcademicWeekUpdateInput = {
  active?: boolean;
  endDate?: Date;
  exceptionalClosures?: ExceptionalClosureUpdateManyWithoutAcademicWeeksInput;
  locked?: boolean;
  name?: string;
  schedule?: ScheduleUpdateManyWithoutAcademicWeeksInput;
  startDate?: Date;
  weeklyProfessorAvailability?: WeeklyProfessorAvailabilityUpdateManyWithoutAcademicWeeksInput;
  weeklyTeachingLoads?: WeeklyTeachingLoadUpdateManyWithoutAcademicWeeksInput;
};
