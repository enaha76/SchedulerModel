import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScheduleTitle } from "../schedule/ScheduleTitle";

export const RoomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Capacity" source="capacity" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="schedule" reference="Schedule">
          <SelectArrayInput
            optionText={ScheduleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
