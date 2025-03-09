import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AcademicWeekService } from "./academicWeek.service";
import { AcademicWeekControllerBase } from "./base/academicWeek.controller.base";

@swagger.ApiTags("academicWeeks")
@common.Controller("academicWeeks")
export class AcademicWeekController extends AcademicWeekControllerBase {
  constructor(protected readonly service: AcademicWeekService) {
    super(service);
  }
}
