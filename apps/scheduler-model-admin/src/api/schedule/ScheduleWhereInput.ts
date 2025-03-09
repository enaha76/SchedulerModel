import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { ProfessorWhereUniqueInput } from "../professor/ProfessorWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { AcademicWeekWhereUniqueInput } from "../academicWeek/AcademicWeekWhereUniqueInput";

export type ScheduleWhereInput = {
  course?: CourseWhereUniqueInput;
  createdAt?: DateTimeFilter;
  group?: GroupWhereUniqueInput;
  id?: IntFilter;
  professor?: ProfessorWhereUniqueInput;
  room?: RoomWhereUniqueInput;
  teachingType?: StringFilter;
  timeSlot?: TimeSlotWhereUniqueInput;
  week?: AcademicWeekWhereUniqueInput;
};
