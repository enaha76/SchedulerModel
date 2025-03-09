import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TimeSlotList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TimeSlots"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Day Of Week" source="dayOfWeek" />
        <TextField label="End Time" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="Slot Index" source="slotIndex" />
        <TextField label="Start Time" source="startTime" />{" "}
      </Datagrid>
    </List>
  );
};
