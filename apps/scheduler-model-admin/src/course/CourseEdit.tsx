import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ProfessorAssignmentTitle } from "../professorAssignment/ProfessorAssignmentTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";
import { WeeklyTeachingLoadTitle } from "../weeklyTeachingLoad/WeeklyTeachingLoadTitle";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
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
        <NumberInput step={1} label="Semester" source="semester" />
        <TextInput label="Specialization" source="specialization" />
        <ReferenceArrayInput
          source="weeklyTeachingLoads"
          reference="WeeklyTeachingLoad"
        >
          <SelectArrayInput
            optionText={WeeklyTeachingLoadTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
