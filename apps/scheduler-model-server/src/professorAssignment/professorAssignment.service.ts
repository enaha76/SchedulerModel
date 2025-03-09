import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProfessorAssignmentServiceBase } from "./base/professorAssignment.service.base";

@Injectable()
export class ProfessorAssignmentService extends ProfessorAssignmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
