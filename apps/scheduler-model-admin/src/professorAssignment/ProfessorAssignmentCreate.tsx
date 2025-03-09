import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CourseTitle } from "../course/CourseTitle";
import { GroupTitle } from "../group/GroupTitle";
import { ProfessorTitle } from "../professor/ProfessorTitle";

export const ProfessorAssignmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <ReferenceInput source="group.id" reference="Group" label="Group">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="professor.id"
          reference="Professor"
          label="Professor"
        >
          <SelectInput optionText={ProfessorTitle} />
        </ReferenceInput>
        <TextInput label="Teaching Type" source="teachingType" />
      </SimpleForm>
    </Create>
  );
};
