import * as graphql from "@nestjs/graphql";
import { ProfessorResolverBase } from "./base/professor.resolver.base";
import { Professor } from "./base/Professor";
import { ProfessorService } from "./professor.service";

@graphql.Resolver(() => Professor)
export class ProfessorResolver extends ProfessorResolverBase {
  constructor(protected readonly service: ProfessorService) {
    super(service);
  }
}
