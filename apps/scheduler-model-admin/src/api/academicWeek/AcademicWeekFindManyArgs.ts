import { AcademicWeekWhereInput } from "./AcademicWeekWhereInput";
import { AcademicWeekOrderByInput } from "./AcademicWeekOrderByInput";

export type AcademicWeekFindManyArgs = {
  where?: AcademicWeekWhereInput;
  orderBy?: Array<AcademicWeekOrderByInput>;
  skip?: number;
  take?: number;
};
