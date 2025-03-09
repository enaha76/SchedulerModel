import { TimeSlotWhereInput } from "./TimeSlotWhereInput";
import { TimeSlotOrderByInput } from "./TimeSlotOrderByInput";

export type TimeSlotFindManyArgs = {
  where?: TimeSlotWhereInput;
  orderBy?: Array<TimeSlotOrderByInput>;
  skip?: number;
  take?: number;
};
