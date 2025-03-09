import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GroupOverlapService } from "./groupOverlap.service";
import { GroupOverlapControllerBase } from "./base/groupOverlap.controller.base";

@swagger.ApiTags("groupOverlaps")
@common.Controller("groupOverlaps")
export class GroupOverlapController extends GroupOverlapControllerBase {
  constructor(protected readonly service: GroupOverlapService) {
    super(service);
  }
}
