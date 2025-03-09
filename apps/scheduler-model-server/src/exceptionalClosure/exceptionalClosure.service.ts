import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExceptionalClosureServiceBase } from "./base/exceptionalClosure.service.base";

@Injectable()
export class ExceptionalClosureService extends ExceptionalClosureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
