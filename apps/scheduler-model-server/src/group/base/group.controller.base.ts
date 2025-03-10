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
import { GroupService } from "../group.service";
import { GroupCreateInput } from "./GroupCreateInput";
import { Group } from "./Group";
import { GroupFindManyArgs } from "./GroupFindManyArgs";
import { GroupWhereUniqueInput } from "./GroupWhereUniqueInput";
import { GroupUpdateInput } from "./GroupUpdateInput";
import { GroupOverlapFindManyArgs } from "../../groupOverlap/base/GroupOverlapFindManyArgs";
import { GroupOverlap } from "../../groupOverlap/base/GroupOverlap";
import { GroupOverlapWhereUniqueInput } from "../../groupOverlap/base/GroupOverlapWhereUniqueInput";
import { ProfessorAssignmentFindManyArgs } from "../../professorAssignment/base/ProfessorAssignmentFindManyArgs";
import { ProfessorAssignment } from "../../professorAssignment/base/ProfessorAssignment";
import { ProfessorAssignmentWhereUniqueInput } from "../../professorAssignment/base/ProfessorAssignmentWhereUniqueInput";
import { ScheduleFindManyArgs } from "../../schedule/base/ScheduleFindManyArgs";
import { Schedule } from "../../schedule/base/Schedule";
import { ScheduleWhereUniqueInput } from "../../schedule/base/ScheduleWhereUniqueInput";
import { WeeklyTeachingLoadFindManyArgs } from "../../weeklyTeachingLoad/base/WeeklyTeachingLoadFindManyArgs";
import { WeeklyTeachingLoad } from "../../weeklyTeachingLoad/base/WeeklyTeachingLoad";
import { WeeklyTeachingLoadWhereUniqueInput } from "../../weeklyTeachingLoad/base/WeeklyTeachingLoadWhereUniqueInput";

export class GroupControllerBase {
  constructor(protected readonly service: GroupService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Group })
  async createGroup(@common.Body() data: GroupCreateInput): Promise<Group> {
    return await this.service.createGroup({
      data: data,
      select: {
        id: true,
        name: true,
        semester: true,
        specialization: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Group] })
  @ApiNestedQuery(GroupFindManyArgs)
  async groups(@common.Req() request: Request): Promise<Group[]> {
    const args = plainToClass(GroupFindManyArgs, request.query);
    return this.service.groups({
      ...args,
      select: {
        id: true,
        name: true,
        semester: true,
        specialization: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async group(
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Group | null> {
    const result = await this.service.group({
      where: params,
      select: {
        id: true,
        name: true,
        semester: true,
        specialization: true,
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
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGroup(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() data: GroupUpdateInput
  ): Promise<Group | null> {
    try {
      return await this.service.updateGroup({
        where: params,
        data: data,
        select: {
          id: true,
          name: true,
          semester: true,
          specialization: true,
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
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGroup(
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Group | null> {
    try {
      return await this.service.deleteGroup({
        where: params,
        select: {
          id: true,
          name: true,
          semester: true,
          specialization: true,
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

  @common.Get("/:id/groupOverlaps1")
  @ApiNestedQuery(GroupOverlapFindManyArgs)
  async findGroupOverlaps1(
    @common.Req() request: Request,
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<GroupOverlap[]> {
    const query = plainToClass(GroupOverlapFindManyArgs, request.query);
    const results = await this.service.findGroupOverlaps1(params.id, {
      ...query,
      select: {
        canOverlap: true,

        group1: {
          select: {
            id: true,
          },
        },

        group2: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/groupOverlaps1")
  async connectGroupOverlaps1(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: GroupOverlapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      groupOverlaps1: {
        connect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/groupOverlaps1")
  async updateGroupOverlaps1(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: GroupOverlapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      groupOverlaps1: {
        set: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/groupOverlaps1")
  async disconnectGroupOverlaps1(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: GroupOverlapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      groupOverlaps1: {
        disconnect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/groupOverlaps2")
  @ApiNestedQuery(GroupOverlapFindManyArgs)
  async findGroupOverlaps2(
    @common.Req() request: Request,
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<GroupOverlap[]> {
    const query = plainToClass(GroupOverlapFindManyArgs, request.query);
    const results = await this.service.findGroupOverlaps2(params.id, {
      ...query,
      select: {
        canOverlap: true,

        group1: {
          select: {
            id: true,
          },
        },

        group2: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/groupOverlaps2")
  async connectGroupOverlaps2(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: GroupOverlapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      groupOverlaps2: {
        connect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/groupOverlaps2")
  async updateGroupOverlaps2(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: GroupOverlapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      groupOverlaps2: {
        set: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/groupOverlaps2")
  async disconnectGroupOverlaps2(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: GroupOverlapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      groupOverlaps2: {
        disconnect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/professorAssignments")
  @ApiNestedQuery(ProfessorAssignmentFindManyArgs)
  async findProfessorAssignments(
    @common.Req() request: Request,
    @common.Param() params: GroupWhereUniqueInput
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
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: ProfessorAssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      professorAssignments: {
        connect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/professorAssignments")
  async updateProfessorAssignments(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: ProfessorAssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      professorAssignments: {
        set: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/professorAssignments")
  async disconnectProfessorAssignments(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: ProfessorAssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      professorAssignments: {
        disconnect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/schedule")
  @ApiNestedQuery(ScheduleFindManyArgs)
  async findSchedule(
    @common.Req() request: Request,
    @common.Param() params: GroupWhereUniqueInput
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
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        connect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/schedule")
  async updateSchedule(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        set: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/schedule")
  async disconnectSchedule(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        disconnect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/weeklyTeachingLoads")
  @ApiNestedQuery(WeeklyTeachingLoadFindManyArgs)
  async findWeeklyTeachingLoads(
    @common.Req() request: Request,
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<WeeklyTeachingLoad[]> {
    const query = plainToClass(WeeklyTeachingLoadFindManyArgs, request.query);
    const results = await this.service.findWeeklyTeachingLoads(params.id, {
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

        hoursRequired: true,
        id: true,
        teachingType: true,

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

  @common.Post("/:id/weeklyTeachingLoads")
  async connectWeeklyTeachingLoads(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: WeeklyTeachingLoadWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weeklyTeachingLoads: {
        connect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/weeklyTeachingLoads")
  async updateWeeklyTeachingLoads(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: WeeklyTeachingLoadWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weeklyTeachingLoads: {
        set: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/weeklyTeachingLoads")
  async disconnectWeeklyTeachingLoads(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: WeeklyTeachingLoadWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weeklyTeachingLoads: {
        disconnect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }
}
