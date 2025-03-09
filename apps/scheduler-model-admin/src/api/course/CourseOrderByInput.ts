import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  code?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  semester?: SortOrder;
  specialization?: SortOrder;
};
