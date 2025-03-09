import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type GroupOverlapCreateInput = {
  canOverlap: boolean;
  group1: GroupWhereUniqueInput;
  group2: GroupWhereUniqueInput;
};
