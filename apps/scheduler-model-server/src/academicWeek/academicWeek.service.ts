import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AcademicWeekServiceBase } from "./base/academicWeek.service.base";

@Injectable()
export class AcademicWeekService extends AcademicWeekServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
