/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProfessorAssignmentService } from "../professorAssignment.service";
import { ProfessorAssignmentCreateInput } from "./ProfessorAssignmentCreateInput";
import { ProfessorAssignment } from "./ProfessorAssignment";
import { ProfessorAssignmentFindManyArgs } from "./ProfessorAssignmentFindManyArgs";
import { ProfessorAssignmentWhereUniqueInput } from "./ProfessorAssignmentWhereUniqueInput";
import { ProfessorAssignmentUpdateInput } from "./ProfessorAssignmentUpdateInput";

export class ProfessorAssignmentControllerBase {
  constructor(protected readonly service: ProfessorAssignmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProfessorAssignment })
  async createProfessorAssignment(
    @common.Body() data: ProfessorAssignmentCreateInput
  ): Promise<ProfessorAssignment> {
    return await this.service.createProfessorAssignment({
      data: {
        ...data,

        course: {
          connect: data.course,
        },

        group: {
          connect: data.group,
        },

        professor: {
          connect: data.professor,
        },
      },
      select: {
        course: {
          select: {
            id: true,
          },
        },

        group: {
          select: {
            id: true,
          },
        },

        id: true,

        professor: {
          select: {
            id: true,
          },
        },

        teachingType: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProfessorAssignment] })
  @ApiNestedQuery(ProfessorAssignmentFindManyArgs)
  async professorAssignments(
    @common.Req() request: Request
  ): Promise<ProfessorAssignment[]> {
    const args = plainToClass(ProfessorAssignmentFindManyArgs, request.query);
    return this.service.professorAssignments({
      ...args,
      select: {
        course: {
          select: {
            id: true,
          },
        },

        group: {
          select: {
            id: true,
          },
        },

        id: true,

        professor: {
          select: {
            id: true,
          },
        },

        teachingType: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProfessorAssignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async professorAssignment(
    @common.Param() params: ProfessorAssignmentWhereUniqueInput
  ): Promise<ProfessorAssignment | null> {
    const result = await this.service.professorAssignment({
      where: params,
      select: {
        course: {
          select: {
            id: true,
          },
        },

        group: {
          select: {
            id: true,
          },
        },

        id: true,

        professor: {
          select: {
            id: true,
          },
        },

        teachingType: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProfessorAssignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProfessorAssignment(
    @common.Param() params: ProfessorAssignmentWhereUniqueInput,
    @common.Body() data: ProfessorAssignmentUpdateInput
  ): Promise<ProfessorAssignment | null> {
    try {
      return await this.service.updateProfessorAssignment({
        where: params,
        data: {
          ...data,

          course: {
            connect: data.course,
          },

          group: {
            connect: data.group,
          },

          professor: {
            connect: data.professor,
          },
        },
        select: {
          course: {
            select: {
              id: true,
            },
          },

          group: {
            select: {
              id: true,
            },
          },

          id: true,

          professor: {
            select: {
              id: true,
            },
          },

          teachingType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProfessorAssignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProfessorAssignment(
    @common.Param() params: ProfessorAssignmentWhereUniqueInput
  ): Promise<ProfessorAssignment | null> {
    try {
      return await this.service.deleteProfessorAssignment({
        where: params,
        select: {
          course: {
            select: {
              id: true,
            },
          },

          group: {
            select: {
              id: true,
            },
          },

          id: true,

          professor: {
            select: {
              id: true,
            },
          },

          teachingType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
