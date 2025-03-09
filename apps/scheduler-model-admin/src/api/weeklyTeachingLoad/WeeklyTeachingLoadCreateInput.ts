import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { AcademicWeekWhereUniqueInput } from "../academicWeek/AcademicWeekWhereUniqueInput";

export type WeeklyTeachingLoadCreateInput = {
  course: CourseWhereUniqueInput;
  group: GroupWhereUniqueInput;
  hoursRequired: number;
  teachingType: string;
  week: AcademicWeekWhereUniqueInput;
};
