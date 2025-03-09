import { Module } from "@nestjs/common";
import { ProfessorModuleBase } from "./base/professor.module.base";
import { ProfessorService } from "./professor.service";
import { ProfessorController } from "./professor.controller";
import { ProfessorResolver } from "./professor.resolver";

@Module({
  imports: [ProfessorModuleBase],
  controllers: [ProfessorController],
  providers: [ProfessorService, ProfessorResolver],
  exports: [ProfessorService],
})
export class ProfessorModule {}
