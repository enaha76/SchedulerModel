import { Schedule } from "../schedule/Schedule";

export type Room = {
  capacity: number;
  id: number;
  name: string;
  schedule?: Array<Schedule>;
  typeField: string;
};
