import * as graphql from "@nestjs/graphql";
import { GroupResolverBase } from "./base/group.resolver.base";
import { Group } from "./base/Group";
import { GroupService } from "./group.service";

@graphql.Resolver(() => Group)
export class GroupResolver extends GroupResolverBase {
  constructor(protected readonly service: GroupService) {
    super(service);
  }
}
