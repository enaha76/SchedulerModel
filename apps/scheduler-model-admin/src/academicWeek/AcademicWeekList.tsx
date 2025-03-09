import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AcademicWeekList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AcademicWeeks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField label="Active" source="active" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="Locked" source="locked" />
        <TextField label="Name" source="name" />
        <TextField label="Start Date" source="startDate" />{" "}
      </Datagrid>
    </List>
  );
};
