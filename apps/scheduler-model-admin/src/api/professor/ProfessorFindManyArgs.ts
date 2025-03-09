import { ProfessorWhereInput } from "./ProfessorWhereInput";
import { ProfessorOrderByInput } from "./ProfessorOrderByInput";

export type ProfessorFindManyArgs = {
  where?: ProfessorWhereInput;
  orderBy?: Array<ProfessorOrderByInput>;
  skip?: number;
  take?: number;
};
