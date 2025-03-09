import { GroupWhereInput } from "./GroupWhereInput";
import { GroupOrderByInput } from "./GroupOrderByInput";

export type GroupFindManyArgs = {
  where?: GroupWhereInput;
  orderBy?: Array<GroupOrderByInput>;
  skip?: number;
  take?: number;
};
