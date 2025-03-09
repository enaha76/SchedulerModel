import { ExceptionalClosureCreateNestedManyWithoutAcademicWeeksInput } from "./ExceptionalClosureCreateNestedManyWithoutAcademicWeeksInput";
import { ScheduleCreateNestedManyWithoutAcademicWeeksInput } from "./ScheduleCreateNestedManyWithoutAcademicWeeksInput";
import { WeeklyProfessorAvailabilityCreateNestedManyWithoutAcademicWeeksInput } from "./WeeklyProfessorAvailabilityCreateNestedManyWithoutAcademicWeeksInput";
import { WeeklyTeachingLoadCreateNestedManyWithoutAcademicWeeksInput } from "./WeeklyTeachingLoadCreateNestedManyWithoutAcademicWeeksInput";

export type AcademicWeekCreateInput = {
  active: boolean;
  endDate: Date;
  exceptionalClosures?: ExceptionalClosureCreateNestedManyWithoutAcademicWeeksInput;
  locked: boolean;
  name: string;
  schedule?: ScheduleCreateNestedManyWithoutAcademicWeeksInput;
  startDate: Date;
  weeklyProfessorAvailability?: WeeklyProfessorAvailabilityCreateNestedManyWithoutAcademicWeeksInput;
  weeklyTeachingLoads?: WeeklyTeachingLoadCreateNestedManyWithoutAcademicWeeksInput;
};
