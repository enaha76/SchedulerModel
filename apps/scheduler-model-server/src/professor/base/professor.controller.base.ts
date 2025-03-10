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
import { ProfessorService } from "../professor.service";
import { ProfessorCreateInput } from "./ProfessorCreateInput";
import { Professor } from "./Professor";
import { ProfessorFindManyArgs } from "./ProfessorFindManyArgs";
import { ProfessorWhereUniqueInput } from "./ProfessorWhereUniqueInput";
import { ProfessorUpdateInput } from "./ProfessorUpdateInput";
import { ProfessorAssignmentFindManyArgs } from "../../professorAssignment/base/ProfessorAssignmentFindManyArgs";
import { ProfessorAssignment } from "../../professorAssignment/base/ProfessorAssignment";
import { ProfessorAssignmentWhereUniqueInput } from "../../professorAssignment/base/ProfessorAssignmentWhereUniqueInput";
import { ScheduleFindManyArgs } from "../../schedule/base/ScheduleFindManyArgs";
import { Schedule } from "../../schedule/base/Schedule";
import { ScheduleWhereUniqueInput } from "../../schedule/base/ScheduleWhereUniqueInput";
import { WeeklyProfessorAvailabilityFindManyArgs } from "../../weeklyProfessorAvailability/base/WeeklyProfessorAvailabilityFindManyArgs";
import { WeeklyProfessorAvailability } from "../../weeklyProfessorAvailability/base/WeeklyProfessorAvailability";
import { WeeklyProfessorAvailabilityWhereUniqueInput } from "../../weeklyProfessorAvailability/base/WeeklyProfessorAvailabilityWhereUniqueInput";

export class ProfessorControllerBase {
  constructor(protected readonly service: ProfessorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Professor })
  async createProfessor(
    @common.Body() data: ProfessorCreateInput
  ): Promise<Professor> {
    return await this.service.createProfessor({
      data: data,
      select: {
        department: true,
        email: true,
        id: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Professor] })
  @ApiNestedQuery(ProfessorFindManyArgs)
  async professors(@common.Req() request: Request): Promise<Professor[]> {
    const args = plainToClass(ProfessorFindManyArgs, request.query);
    return this.service.professors({
      ...args,
      select: {
        department: true,
        email: true,
        id: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Professor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async professor(
    @common.Param() params: ProfessorWhereUniqueInput
  ): Promise<Professor | null> {
    const result = await this.service.professor({
      where: params,
      select: {
        department: true,
        email: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Professor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProfessor(
    @common.Param() params: ProfessorWhereUniqueInput,
    @common.Body() data: ProfessorUpdateInput
  ): Promise<Professor | null> {
    try {
      return await this.service.updateProfessor({
        where: params,
        data: data,
        select: {
          department: true,
          email: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Professor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProfessor(
    @common.Param() params: ProfessorWhereUniqueInput
  ): Promise<Professor | null> {
    try {
      return await this.service.deleteProfessor({
        where: params,
        select: {
          department: true,
          email: true,
          id: true,
          name: true,
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

  @common.Get("/:id/professorAssignments")
  @ApiNestedQuery(ProfessorAssignmentFindManyArgs)
  async findProfessorAssignments(
    @common.Req() request: Request,
    @common.Param() params: ProfessorWhereUniqueInput
  ): Promise<ProfessorAssignment[]> {
    const query = plainToClass(ProfessorAssignmentFindManyArgs, request.query);
    const results = await this.service.findProfessorAssignments(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/professorAssignments")
  async connectProfessorAssignments(
    @common.Param() params: ProfessorWhereUniqueInput,
    @common.Body() body: ProfessorAssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      professorAssignments: {
        connect: body,
      },
    };
    await this.service.updateProfessor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/professorAssignments")
  async updateProfessorAssignments(
    @common.Param() params: ProfessorWhereUniqueInput,
    @common.Body() body: ProfessorAssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      professorAssignments: {
        set: body,
      },
    };
    await this.service.updateProfessor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/professorAssignments")
  async disconnectProfessorAssignments(
    @common.Param() params: ProfessorWhereUniqueInput,
    @common.Body() body: ProfessorAssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      professorAssignments: {
        disconnect: body,
      },
    };
    await this.service.updateProfessor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/schedule")
  @ApiNestedQuery(ScheduleFindManyArgs)
  async findSchedule(
    @common.Req() request: Request,
    @common.Param() params: ProfessorWhereUniqueInput
  ): Promise<Schedule[]> {
    const query = plainToClass(ScheduleFindManyArgs, request.query);
    const results = await this.service.findSchedule(params.id, {
      ...query,
      select: {
        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,

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

        room: {
          select: {
            id: true,
          },
        },

        teachingType: true,

        timeSlot: {
          select: {
            id: true,
          },
        },

        week: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/schedule")
  async connectSchedule(
    @common.Param() params: ProfessorWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        connect: body,
      },
    };
    await this.service.updateProfessor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/schedule")
  async updateSchedule(
    @common.Param() params: ProfessorWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        set: body,
      },
    };
    await this.service.updateProfessor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/schedule")
  async disconnectSchedule(
    @common.Param() params: ProfessorWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        disconnect: body,
      },
    };
    await this.service.updateProfessor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/weeklyProfessorAvailability")
  @ApiNestedQuery(WeeklyProfessorAvailabilityFindManyArgs)
  async findWeeklyProfessorAvailability(
    @common.Req() request: Request,
    @common.Param() params: ProfessorWhereUniqueInput
  ): Promise<WeeklyProfessorAvailability[]> {
    const query = plainToClass(
      WeeklyProfessorAvailabilityFindManyArgs,
      request.query
    );
    const results = await this.service.findWeeklyProfessorAvailability(
      params.id,
      {
        ...query,
        select: {
          id: true,
          isAvailable: true,

          professor: {
            select: {
              id: true,
            },
          },

          timeSlot: {
            select: {
              id: true,
            },
          },

          week: {
            select: {
              id: true,
            },
          },
        },
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/weeklyProfessorAvailability")
  async connectWeeklyProfessorAvailability(
    @common.Param() params: ProfessorWhereUniqueInput,
    @common.Body() body: WeeklyProfessorAvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weeklyProfessorAvailability: {
        connect: body,
      },
    };
    await this.service.updateProfessor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/weeklyProfessorAvailability")
  async updateWeeklyProfessorAvailability(
    @common.Param() params: ProfessorWhereUniqueInput,
    @common.Body() body: WeeklyProfessorAvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weeklyProfessorAvailability: {
        set: body,
      },
    };
    await this.service.updateProfessor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/weeklyProfessorAvailability")
  async disconnectWeeklyProfessorAvailability(
    @common.Param() params: ProfessorWhereUniqueInput,
    @common.Body() body: WeeklyProfessorAvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weeklyProfessorAvailability: {
        disconnect: body,
      },
    };
    await this.service.updateProfessor({
      where: params,
      data,
      select: { id: true },
    });
  }
}
