import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { GroupOverlapTitle } from "../groupOverlap/GroupOverlapTitle";
import { ProfessorAssignmentTitle } from "../professorAssignment/ProfessorAssignmentTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";
import { WeeklyTeachingLoadTitle } from "../weeklyTeachingLoad/WeeklyTeachingLoadTitle";

export const GroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="groupOverlaps1" reference="GroupOverlap">
          <SelectArrayInput
            optionText={GroupOverlapTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="groupOverlaps2" reference="GroupOverlap">
          <SelectArrayInput
            optionText={GroupOverlapTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
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
    </Create>
  );
};
