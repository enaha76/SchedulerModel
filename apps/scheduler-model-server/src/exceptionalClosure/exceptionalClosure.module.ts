import { Module } from "@nestjs/common";
import { ExceptionalClosureModuleBase } from "./base/exceptionalClosure.module.base";
import { ExceptionalClosureService } from "./exceptionalClosure.service";
import { ExceptionalClosureController } from "./exceptionalClosure.controller";
import { ExceptionalClosureResolver } from "./exceptionalClosure.resolver";

@Module({
  imports: [ExceptionalClosureModuleBase],
  controllers: [ExceptionalClosureController],
  providers: [ExceptionalClosureService, ExceptionalClosureResolver],
  exports: [ExceptionalClosureService],
})
export class ExceptionalClosureModule {}
