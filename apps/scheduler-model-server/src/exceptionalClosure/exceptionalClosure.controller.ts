import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExceptionalClosureService } from "./exceptionalClosure.service";
import { ExceptionalClosureControllerBase } from "./base/exceptionalClosure.controller.base";

@swagger.ApiTags("exceptionalClosures")
@common.Controller("exceptionalClosures")
export class ExceptionalClosureController extends ExceptionalClosureControllerBase {
  constructor(protected readonly service: ExceptionalClosureService) {
    super(service);
  }
}
