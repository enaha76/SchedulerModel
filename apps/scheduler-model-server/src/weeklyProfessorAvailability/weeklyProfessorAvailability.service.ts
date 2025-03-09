import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeeklyProfessorAvailabilityServiceBase } from "./base/weeklyProfessorAvailability.service.base";

@Injectable()
export class WeeklyProfessorAvailabilityService extends WeeklyProfessorAvailabilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
