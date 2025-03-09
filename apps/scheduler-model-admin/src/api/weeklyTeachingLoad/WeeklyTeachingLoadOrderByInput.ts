import { SortOrder } from "../../util/SortOrder";

export type WeeklyTeachingLoadOrderByInput = {
  courseId?: SortOrder;
  groupId?: SortOrder;
  hoursRequired?: SortOrder;
  id?: SortOrder;
  teachingType?: SortOrder;
  weekId?: SortOrder;
};
