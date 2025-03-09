import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  professorId?: SortOrder;
  roomId?: SortOrder;
  teachingType?: SortOrder;
  timeSlotId?: SortOrder;
  weekId?: SortOrder;
};
