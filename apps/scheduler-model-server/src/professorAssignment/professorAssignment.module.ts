import { Module } from "@nestjs/common";
import { ProfessorAssignmentModuleBase } from "./base/professorAssignment.module.base";
import { ProfessorAssignmentService } from "./professorAssignment.service";
import { ProfessorAssignmentController } from "./professorAssignment.controller";
import { ProfessorAssignmentResolver } from "./professorAssignment.resolver";

@Module({
  imports: [ProfessorAssignmentModuleBase],
  controllers: [ProfessorAssignmentController],
  providers: [ProfessorAssignmentService, ProfessorAssignmentResolver],
  exports: [ProfessorAssignmentService],
})
export class ProfessorAssignmentModule {}
