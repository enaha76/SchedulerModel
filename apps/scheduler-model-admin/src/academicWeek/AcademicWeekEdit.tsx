import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ExceptionalClosureTitle } from "../exceptionalClosure/ExceptionalClosureTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";
import { WeeklyProfessorAvailabilityTitle } from "../weeklyProfessorAvailability/WeeklyProfessorAvailabilityTitle";
import { WeeklyTeachingLoadTitle } from "../weeklyTeachingLoad/WeeklyTeachingLoadTitle";

export const AcademicWeekEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <DateTimeInput label="End Date" source="endDate" />
        <ReferenceArrayInput
          source="exceptionalClosures"
          reference="ExceptionalClosure"
        >
          <SelectArrayInput
            optionText={ExceptionalClosureTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="Locked" source="locked" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="schedule" reference="Schedule">
          <SelectArrayInput
            optionText={ScheduleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Start Date" source="startDate" />
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
