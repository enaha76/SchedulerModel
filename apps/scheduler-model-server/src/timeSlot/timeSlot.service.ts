import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeSlotServiceBase } from "./base/timeSlot.service.base";

@Injectable()
export class TimeSlotService extends TimeSlotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
