import { Module } from "@nestjs/common";
import { AcademicWeekModuleBase } from "./base/academicWeek.module.base";
import { AcademicWeekService } from "./academicWeek.service";
import { AcademicWeekController } from "./academicWeek.controller";
import { AcademicWeekResolver } from "./academicWeek.resolver";

@Module({
  imports: [AcademicWeekModuleBase],
  controllers: [AcademicWeekController],
  providers: [AcademicWeekService, AcademicWeekResolver],
  exports: [AcademicWeekService],
})
export class AcademicWeekModule {}
