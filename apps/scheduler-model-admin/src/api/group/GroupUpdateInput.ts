import { GroupOverlapUpdateManyWithoutGroupsInput } from "./GroupOverlapUpdateManyWithoutGroupsInput";
import { ProfessorAssignmentUpdateManyWithoutGroupsInput } from "./ProfessorAssignmentUpdateManyWithoutGroupsInput";
import { ScheduleUpdateManyWithoutGroupsInput } from "./ScheduleUpdateManyWithoutGroupsInput";
import { WeeklyTeachingLoadUpdateManyWithoutGroupsInput } from "./WeeklyTeachingLoadUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  groupOverlaps1?: GroupOverlapUpdateManyWithoutGroupsInput;
  groupOverlaps2?: GroupOverlapUpdateManyWithoutGroupsInput;
  name?: string;
  professorAssignments?: ProfessorAssignmentUpdateManyWithoutGroupsInput;
  schedule?: ScheduleUpdateManyWithoutGroupsInput;
  semester?: number;
  specialization?: string;
  weeklyTeachingLoads?: WeeklyTeachingLoadUpdateManyWithoutGroupsInput;
};
