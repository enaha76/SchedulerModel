import { BooleanFilter } from "../../util/BooleanFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type GroupOverlapWhereInput = {
  canOverlap?: BooleanFilter;
  group1?: GroupWhereUniqueInput;
  group2?: GroupWhereUniqueInput;
  id?: IntFilter;
};
