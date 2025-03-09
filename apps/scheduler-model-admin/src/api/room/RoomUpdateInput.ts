import { ScheduleUpdateManyWithoutRoomsInput } from "./ScheduleUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  capacity?: number;
  name?: string;
  schedule?: ScheduleUpdateManyWithoutRoomsInput;
  typeField?: string;
};
