import { GroupOverlapCreateNestedManyWithoutGroupsInput } from "./GroupOverlapCreateNestedManyWithoutGroupsInput";
import { ProfessorAssignmentCreateNestedManyWithoutGroupsInput } from "./ProfessorAssignmentCreateNestedManyWithoutGroupsInput";
import { ScheduleCreateNestedManyWithoutGroupsInput } from "./ScheduleCreateNestedManyWithoutGroupsInput";
import { WeeklyTeachingLoadCreateNestedManyWithoutGroupsInput } from "./WeeklyTeachingLoadCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  groupOverlaps1?: GroupOverlapCreateNestedManyWithoutGroupsInput;
  groupOverlaps2?: GroupOverlapCreateNestedManyWithoutGroupsInput;
  name: string;
  professorAssignments?: ProfessorAssignmentCreateNestedManyWithoutGroupsInput;
  schedule?: ScheduleCreateNestedManyWithoutGroupsInput;
  semester: number;
  specialization: string;
  weeklyTeachingLoads?: WeeklyTeachingLoadCreateNestedManyWithoutGroupsInput;
};
