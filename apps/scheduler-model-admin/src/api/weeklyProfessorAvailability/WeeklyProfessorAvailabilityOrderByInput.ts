import { SortOrder } from "../../util/SortOrder";

export type WeeklyProfessorAvailabilityOrderByInput = {
  id?: SortOrder;
  isAvailable?: SortOrder;
  professorId?: SortOrder;
  timeSlotId?: SortOrder;
  weekId?: SortOrder;
};
