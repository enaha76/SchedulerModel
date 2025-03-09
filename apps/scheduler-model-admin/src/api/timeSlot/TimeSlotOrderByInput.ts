import { SortOrder } from "../../util/SortOrder";

export type TimeSlotOrderByInput = {
  dayOfWeek?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  slotIndex?: SortOrder;
  startTime?: SortOrder;
};
