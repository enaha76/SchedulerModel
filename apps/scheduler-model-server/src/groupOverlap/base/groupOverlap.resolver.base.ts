/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { GroupOverlap } from "./GroupOverlap";
import { GroupOverlapCountArgs } from "./GroupOverlapCountArgs";
import { GroupOverlapFindManyArgs } from "./GroupOverlapFindManyArgs";
import { GroupOverlapFindUniqueArgs } from "./GroupOverlapFindUniqueArgs";
import { CreateGroupOverlapArgs } from "./CreateGroupOverlapArgs";
import { UpdateGroupOverlapArgs } from "./UpdateGroupOverlapArgs";
import { DeleteGroupOverlapArgs } from "./DeleteGroupOverlapArgs";
import { Group } from "../../group/base/Group";
import { GroupOverlapService } from "../groupOverlap.service";
@graphql.Resolver(() => GroupOverlap)
export class GroupOverlapResolverBase {
  constructor(protected readonly service: GroupOverlapService) {}

  async _groupOverlapsMeta(
    @graphql.Args() args: GroupOverlapCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [GroupOverlap])
  async groupOverlaps(
    @graphql.Args() args: GroupOverlapFindManyArgs
  ): Promise<GroupOverlap[]> {
    return this.service.groupOverlaps(args);
  }

  @graphql.Query(() => GroupOverlap, { nullable: true })
  async groupOverlap(
    @graphql.Args() args: GroupOverlapFindUniqueArgs
  ): Promise<GroupOverlap | null> {
    const result = await this.service.groupOverlap(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => GroupOverlap)
  async createGroupOverlap(
    @graphql.Args() args: CreateGroupOverlapArgs
  ): Promise<GroupOverlap> {
    return await this.service.createGroupOverlap({
      ...args,
      data: {
        ...args.data,

        group1: {
          connect: args.data.group1,
        },

        group2: {
          connect: args.data.group2,
        },
      },
    });
  }

  @graphql.Mutation(() => GroupOverlap)
  async updateGroupOverlap(
    @graphql.Args() args: UpdateGroupOverlapArgs
  ): Promise<GroupOverlap | null> {
    try {
      return await this.service.updateGroupOverlap({
        ...args,
        data: {
          ...args.data,

          group1: {
            connect: args.data.group1,
          },

          group2: {
            connect: args.data.group2,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => GroupOverlap)
  async deleteGroupOverlap(
    @graphql.Args() args: DeleteGroupOverlapArgs
  ): Promise<GroupOverlap | null> {
    try {
      return await this.service.deleteGroupOverlap(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Group, {
    nullable: true,
    name: "group1",
  })
  async getGroup1(
    @graphql.Parent() parent: GroupOverlap
  ): Promise<Group | null> {
    const result = await this.service.getGroup1(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Group, {
    nullable: true,
    name: "group2",
  })
  async getGroup2(
    @graphql.Parent() parent: GroupOverlap
  ): Promise<Group | null> {
    const result = await this.service.getGroup2(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
