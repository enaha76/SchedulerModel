import { Course } from "../course/Course";
import { Group } from "../group/Group";
import { AcademicWeek } from "../academicWeek/AcademicWeek";

export type WeeklyTeachingLoad = {
  course?: Course;
  group?: Group;
  hoursRequired: number;
  id: number;
  teachingType: string;
  week?: AcademicWeek;
};
