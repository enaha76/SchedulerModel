import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";
import { ACADEMICWEEK_TITLE_FIELD } from "../academicWeek/AcademicWeekTitle";

export const ExceptionalClosureShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Reason" source="reason" />
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
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
