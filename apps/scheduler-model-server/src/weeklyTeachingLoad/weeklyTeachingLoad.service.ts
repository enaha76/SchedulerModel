import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeeklyTeachingLoadServiceBase } from "./base/weeklyTeachingLoad.service.base";

@Injectable()
export class WeeklyTeachingLoadService extends WeeklyTeachingLoadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
