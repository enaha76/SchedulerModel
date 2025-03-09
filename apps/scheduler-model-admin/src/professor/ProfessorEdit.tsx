import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProfessorAssignmentTitle } from "../professorAssignment/ProfessorAssignmentTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";
import { WeeklyProfessorAvailabilityTitle } from "../weeklyProfessorAvailability/WeeklyProfessorAvailabilityTitle";

export const ProfessorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
