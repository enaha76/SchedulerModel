import { Group } from "../group/Group";

export type GroupOverlap = {
  canOverlap: boolean;
  group1?: Group;
  group2?: Group;
  id: number;
};
