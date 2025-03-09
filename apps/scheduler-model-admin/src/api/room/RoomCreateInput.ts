import { ScheduleCreateNestedManyWithoutRoomsInput } from "./ScheduleCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  capacity: number;
  name: string;
  schedule?: ScheduleCreateNestedManyWithoutRoomsInput;
  typeField: string;
};
