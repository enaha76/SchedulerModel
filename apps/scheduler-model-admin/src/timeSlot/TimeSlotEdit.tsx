import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExceptionalClosureTitle } from "../exceptionalClosure/ExceptionalClosureTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";
import { WeeklyProfessorAvailabilityTitle } from "../weeklyProfessorAvailability/WeeklyProfessorAvailabilityTitle";

export const TimeSlotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Day Of Week" source="dayOfWeek" />
        <DateTimeInput label="End Time" source="endTime" />
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
        <ReferenceArrayInput source="schedule" reference="Schedule">
          <SelectArrayInput
            optionText={ScheduleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Slot Index" source="slotIndex" />
        <DateTimeInput label="Start Time" source="startTime" />
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
