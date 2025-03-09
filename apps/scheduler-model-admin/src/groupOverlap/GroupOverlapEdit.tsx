import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GroupTitle } from "../group/GroupTitle";

export const GroupOverlapEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Can Overlap" source="canOverlap" />
        <ReferenceInput source="group1.id" reference="Group" label="Group1">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <ReferenceInput source="group2.id" reference="Group" label="Group2">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
