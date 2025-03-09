import { Course } from "../course/Course";
import { Group } from "../group/Group";
import { Professor } from "../professor/Professor";

export type ProfessorAssignment = {
  course?: Course;
  group?: Group;
  id: number;
  professor?: Professor;
  teachingType: string;
};
