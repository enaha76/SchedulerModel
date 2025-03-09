import { Module } from "@nestjs/common";
import { WeeklyProfessorAvailabilityModuleBase } from "./base/weeklyProfessorAvailability.module.base";
import { WeeklyProfessorAvailabilityService } from "./weeklyProfessorAvailability.service";
import { WeeklyProfessorAvailabilityController } from "./weeklyProfessorAvailability.controller";
import { WeeklyProfessorAvailabilityResolver } from "./weeklyProfessorAvailability.resolver";

@Module({
  imports: [WeeklyProfessorAvailabilityModuleBase],
  controllers: [WeeklyProfessorAvailabilityController],
  providers: [
    WeeklyProfessorAvailabilityService,
    WeeklyProfessorAvailabilityResolver,
  ],
  exports: [WeeklyProfessorAvailabilityService],
})
export class WeeklyProfessorAvailabilityModule {}
