import * as graphql from "@nestjs/graphql";
import { ProfessorAssignmentResolverBase } from "./base/professorAssignment.resolver.base";
import { ProfessorAssignment } from "./base/ProfessorAssignment";
import { ProfessorAssignmentService } from "./professorAssignment.service";

@graphql.Resolver(() => ProfessorAssignment)
export class ProfessorAssignmentResolver extends ProfessorAssignmentResolverBase {
  constructor(protected readonly service: ProfessorAssignmentService) {
    super(service);
  }
}
