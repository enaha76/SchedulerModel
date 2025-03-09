import * as graphql from "@nestjs/graphql";
import { WeeklyProfessorAvailabilityResolverBase } from "./base/weeklyProfessorAvailability.resolver.base";
import { WeeklyProfessorAvailability } from "./base/WeeklyProfessorAvailability";
import { WeeklyProfessorAvailabilityService } from "./weeklyProfessorAvailability.service";

@graphql.Resolver(() => WeeklyProfessorAvailability)
export class WeeklyProfessorAvailabilityResolver extends WeeklyProfessorAvailabilityResolverBase {
  constructor(protected readonly service: WeeklyProfessorAvailabilityService) {
    super(service);
  }
}
