import { GroupOverlap as TGroupOverlap } from "../api/groupOverlap/GroupOverlap";

export const GROUPOVERLAP_TITLE_FIELD = "id";

export const GroupOverlapTitle = (record: TGroupOverlap): string => {
  return record.id?.toString() || String(record.id);
};
