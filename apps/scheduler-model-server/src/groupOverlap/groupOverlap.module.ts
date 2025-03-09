import { Module } from "@nestjs/common";
import { GroupOverlapModuleBase } from "./base/groupOverlap.module.base";
import { GroupOverlapService } from "./groupOverlap.service";
import { GroupOverlapController } from "./groupOverlap.controller";
import { GroupOverlapResolver } from "./groupOverlap.resolver";

@Module({
  imports: [GroupOverlapModuleBase],
  controllers: [GroupOverlapController],
  providers: [GroupOverlapService, GroupOverlapResolver],
  exports: [GroupOverlapService],
})
export class GroupOverlapModule {}
