import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProfessorAssignmentTitle } from "../professorAssignment/ProfessorAssignmentTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";
import { WeeklyProfessorAvailabilityTitle } from "../weeklyProfessorAvailability/WeeklyProfessorAvailabilityTitle";

export const ProfessorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <TextInput label="Email" source="email" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="professorAssignments"
          reference="ProfessorAssignment"
        >
          <SelectArrayInput
            optionText={ProfessorAssignmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="schedule" reference="Schedule">
          <SelectArrayInput
            optionText={ScheduleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="weeklyProfessorAvailability"
          reference="WeeklyProfessorAvailability"
        >
          <SelectArrayInput
            optionText={WeeklyProfessorAvailabilityTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
