import { SortOrder } from "../../util/SortOrder";

export type GroupOverlapOrderByInput = {
  canOverlap?: SortOrder;
  group1Id?: SortOrder;
  group2Id?: SortOrder;
  id?: SortOrder;
};
