import { Course } from "../course/Course";
import { Group } from "../group/Group";
import { Professor } from "../professor/Professor";
import { Room } from "../room/Room";
import { TimeSlot } from "../timeSlot/TimeSlot";
import { AcademicWeek } from "../academicWeek/AcademicWeek";

export type Schedule = {
  course?: Course;
  createdAt: Date;
  group?: Group;
  id: number;
  professor?: Professor;
  room?: Room;
  teachingType: string;
  timeSlot?: TimeSlot;
  week?: AcademicWeek;
};
