import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GroupList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Groups"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Semester" source="semester" />
        <TextField label="Specialization" source="specialization" />{" "}
      </Datagrid>
    </List>
  );
};
