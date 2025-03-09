import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WeeklyTeachingLoadService } from "./weeklyTeachingLoad.service";
import { WeeklyTeachingLoadControllerBase } from "./base/weeklyTeachingLoad.controller.base";

@swagger.ApiTags("weeklyTeachingLoads")
@common.Controller("weeklyTeachingLoads")
export class WeeklyTeachingLoadController extends WeeklyTeachingLoadControllerBase {
  constructor(protected readonly service: WeeklyTeachingLoadService) {
    super(service);
  }
}
