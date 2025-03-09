import * as graphql from "@nestjs/graphql";
import { WeeklyTeachingLoadResolverBase } from "./base/weeklyTeachingLoad.resolver.base";
import { WeeklyTeachingLoad } from "./base/WeeklyTeachingLoad";
import { WeeklyTeachingLoadService } from "./weeklyTeachingLoad.service";

@graphql.Resolver(() => WeeklyTeachingLoad)
export class WeeklyTeachingLoadResolver extends WeeklyTeachingLoadResolverBase {
  constructor(protected readonly service: WeeklyTeachingLoadService) {
    super(service);
  }
}
