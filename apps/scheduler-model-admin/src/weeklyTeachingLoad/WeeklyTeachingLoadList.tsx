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
import { ACADEMICWEEK_TITLE_FIELD } from "../academicWeek/AcademicWeekTitle";

export const WeeklyTeachingLoadList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"WeeklyTeachingLoads"}
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
        <TextField label="Hours Required" source="hoursRequired" />
        <TextField label="ID" source="id" />
        <TextField label="Teaching Type" source="teachingType" />
        <ReferenceField
          label="Week"
          source="academicweek.id"
          reference="AcademicWeek"
        >
          <TextField source={ACADEMICWEEK_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
