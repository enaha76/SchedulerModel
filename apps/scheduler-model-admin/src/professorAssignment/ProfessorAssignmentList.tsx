import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { GROUP_TITLE_FIELD } from "../group/GroupTitle";
import { PROFESSOR_TITLE_FIELD } from "../professor/ProfessorTitle";

export const ProfessorAssignmentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ProfessorAssignments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Group" source="group.id" reference="Group">
          <TextField source={GROUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Professor"
          source="professor.id"
          reference="Professor"
        >
          <TextField source={PROFESSOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Teaching Type" source="teachingType" />{" "}
      </Datagrid>
    </List>
  );
};
