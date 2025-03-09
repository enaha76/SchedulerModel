import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";
import { AcademicWeekTitle } from "../academicWeek/AcademicWeekTitle";

export const ExceptionalClosureEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
