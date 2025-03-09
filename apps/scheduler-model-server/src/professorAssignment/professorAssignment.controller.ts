import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProfessorAssignmentService } from "./professorAssignment.service";
import { ProfessorAssignmentControllerBase } from "./base/professorAssignment.controller.base";

@swagger.ApiTags("professorAssignments")
@common.Controller("professorAssignments")
export class ProfessorAssignmentController extends ProfessorAssignmentControllerBase {
  constructor(protected readonly service: ProfessorAssignmentService) {
    super(service);
  }
}
