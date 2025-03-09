import { Group as TGroup } from "../api/group/Group";

export const GROUP_TITLE_FIELD = "name";

export const GroupTitle = (record: TGroup): string => {
  return record.name?.toString() || String(record.id);
};
