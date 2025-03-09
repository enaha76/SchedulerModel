import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProfessorServiceBase } from "./base/professor.service.base";

@Injectable()
export class ProfessorService extends ProfessorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
