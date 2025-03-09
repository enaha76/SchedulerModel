import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROFESSOR_TITLE_FIELD } from "../professor/ProfessorTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";
import { ACADEMICWEEK_TITLE_FIELD } from "../academicWeek/AcademicWeekTitle";

export const WeeklyProfessorAvailabilityList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"WeeklyProfessorAvailabilities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ID" source="id" />
        <BooleanField label="Is Available" source="isAvailable" />
        <ReferenceField
          label="Professor"
          source="professor.id"
          reference="Professor"
        >
          <TextField source={PROFESSOR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Time Slot"
          source="timeslot.id"
          reference="TimeSlot"
        >
          <TextField source={TIMESLOT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Week"
          source="academicweek.id"
          reference="AcademicWeek"
        >
          <TextField source={ACADEMICWEEK_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
