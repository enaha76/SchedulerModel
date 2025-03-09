import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";
import { AcademicWeekTitle } from "../academicWeek/AcademicWeekTitle";

export const ExceptionalClosureCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Reason" source="reason" />
        <ReferenceInput
          source="timeSlot.id"
          reference="TimeSlot"
          label="Time Slot"
        >
          <SelectInput optionText={TimeSlotTitle} />
        </ReferenceInput>
        <ReferenceInput source="week.id" reference="AcademicWeek" label="Week">
          <SelectInput optionText={AcademicWeekTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
