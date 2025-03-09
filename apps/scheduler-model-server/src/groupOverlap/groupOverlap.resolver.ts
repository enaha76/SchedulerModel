import * as graphql from "@nestjs/graphql";
import { GroupOverlapResolverBase } from "./base/groupOverlap.resolver.base";
import { GroupOverlap } from "./base/GroupOverlap";
import { GroupOverlapService } from "./groupOverlap.service";

@graphql.Resolver(() => GroupOverlap)
export class GroupOverlapResolver extends GroupOverlapResolverBase {
  constructor(protected readonly service: GroupOverlapService) {
    super(service);
  }
}
