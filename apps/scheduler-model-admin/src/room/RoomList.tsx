import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RoomList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Rooms"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Capacity" source="capacity" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Type Field" source="typeField" />{" "}
      </Datagrid>
    </List>
  );
};
