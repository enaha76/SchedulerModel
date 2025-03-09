import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GroupService } from "./group.service";
import { GroupControllerBase } from "./base/group.controller.base";

@swagger.ApiTags("groups")
@common.Controller("groups")
export class GroupController extends GroupControllerBase {
  constructor(protected readonly service: GroupService) {
    super(service);
  }
}
