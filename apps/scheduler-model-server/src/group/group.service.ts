import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GroupServiceBase } from "./base/group.service.base";

@Injectable()
export class GroupService extends GroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
