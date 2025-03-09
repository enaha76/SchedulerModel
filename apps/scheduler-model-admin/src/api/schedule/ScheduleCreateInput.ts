import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { ProfessorWhereUniqueInput } from "../professor/ProfessorWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { AcademicWeekWhereUniqueInput } from "../academicWeek/AcademicWeekWhereUniqueInput";

export type ScheduleCreateInput = {
  course: CourseWhereUniqueInput;
  group: GroupWhereUniqueInput;
  professor: ProfessorWhereUniqueInput;
  room: RoomWhereUniqueInput;
  teachingType: string;
  timeSlot: TimeSlotWhereUniqueInput;
  week: AcademicWeekWhereUniqueInput;
};
