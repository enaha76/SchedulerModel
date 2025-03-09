import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GROUP_TITLE_FIELD } from "../group/GroupTitle";

export const GroupOverlapList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GroupOverlaps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField label="Can Overlap" source="canOverlap" />
        <ReferenceField label="Group1" source="group.id" reference="Group">
          <TextField source={GROUP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Group2" source="group.id" reference="Group">
          <TextField source={GROUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />{" "}
      </Datagrid>
    </List>
  );
};
