import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";

export type RoomWhereInput = {
  capacity?: IntFilter;
  id?: IntFilter;
  name?: StringFilter;
  schedule?: ScheduleListRelationFilter;
  typeField?: StringFilter;
};
