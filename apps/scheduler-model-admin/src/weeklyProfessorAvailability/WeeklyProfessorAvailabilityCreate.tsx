import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProfessorTitle } from "../professor/ProfessorTitle";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";
import { AcademicWeekTitle } from "../academicWeek/AcademicWeekTitle";

export const WeeklyProfessorAvailabilityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Is Available" source="isAvailable" />
        <ReferenceInput
          source="professor.id"
          reference="Professor"
          label="Professor"
        >
          <SelectInput optionText={ProfessorTitle} />
        </ReferenceInput>
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
