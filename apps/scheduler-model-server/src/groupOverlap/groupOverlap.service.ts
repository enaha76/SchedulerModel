import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GroupOverlapServiceBase } from "./base/groupOverlap.service.base";

@Injectable()
export class GroupOverlapService extends GroupOverlapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
