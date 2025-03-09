import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type GroupOverlapUpdateInput = {
  canOverlap?: boolean;
  group1?: GroupWhereUniqueInput;
  group2?: GroupWhereUniqueInput;
};
