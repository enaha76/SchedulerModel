import { Module } from "@nestjs/common";
import { WeeklyTeachingLoadModuleBase } from "./base/weeklyTeachingLoad.module.base";
import { WeeklyTeachingLoadService } from "./weeklyTeachingLoad.service";
import { WeeklyTeachingLoadController } from "./weeklyTeachingLoad.controller";
import { WeeklyTeachingLoadResolver } from "./weeklyTeachingLoad.resolver";

@Module({
  imports: [WeeklyTeachingLoadModuleBase],
  controllers: [WeeklyTeachingLoadController],
  providers: [WeeklyTeachingLoadService, WeeklyTeachingLoadResolver],
  exports: [WeeklyTeachingLoadService],
})
export class WeeklyTeachingLoadModule {}
