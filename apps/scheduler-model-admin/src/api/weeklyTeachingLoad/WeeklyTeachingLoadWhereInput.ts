import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { AcademicWeekWhereUniqueInput } from "../academicWeek/AcademicWeekWhereUniqueInput";

export type WeeklyTeachingLoadWhereInput = {
  course?: CourseWhereUniqueInput;
  group?: GroupWhereUniqueInput;
  hoursRequired?: IntFilter;
  id?: IntFilter;
  teachingType?: StringFilter;
  week?: AcademicWeekWhereUniqueInput;
};
