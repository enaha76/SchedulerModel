import * as graphql from "@nestjs/graphql";
import { AcademicWeekResolverBase } from "./base/academicWeek.resolver.base";
import { AcademicWeek } from "./base/AcademicWeek";
import { AcademicWeekService } from "./academicWeek.service";

@graphql.Resolver(() => AcademicWeek)
export class AcademicWeekResolver extends AcademicWeekResolverBase {
  constructor(protected readonly service: AcademicWeekService) {
    super(service);
  }
}
