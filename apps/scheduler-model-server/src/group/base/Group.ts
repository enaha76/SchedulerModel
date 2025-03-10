/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GroupOverlap } from "../../groupOverlap/base/GroupOverlap";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  IsString,
  MaxLength,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { ProfessorAssignment } from "../../professorAssignment/base/ProfessorAssignment";
import { Schedule } from "../../schedule/base/Schedule";
import { WeeklyTeachingLoad } from "../../weeklyTeachingLoad/base/WeeklyTeachingLoad";

@ObjectType()
class Group {
  @ApiProperty({
    required: false,
    type: () => [GroupOverlap],
  })
  @ValidateNested()
  @Type(() => GroupOverlap)
  @IsOptional()
  groupOverlaps1?: Array<GroupOverlap>;

  @ApiProperty({
    required: false,
    type: () => [GroupOverlap],
  })
  @ValidateNested()
  @Type(() => GroupOverlap)
  @IsOptional()
  groupOverlaps2?: Array<GroupOverlap>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => [ProfessorAssignment],
  })
  @ValidateNested()
  @Type(() => ProfessorAssignment)
  @IsOptional()
  professorAssignments?: Array<ProfessorAssignment>;

  @ApiProperty({
    required: false,
    type: () => [Schedule],
  })
  @ValidateNested()
  @Type(() => Schedule)
  @IsOptional()
  schedule?: Array<Schedule>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  semester!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  specialization!: string;

  @ApiProperty({
    required: false,
    type: () => [WeeklyTeachingLoad],
  })
  @ValidateNested()
  @Type(() => WeeklyTeachingLoad)
  @IsOptional()
  weeklyTeachingLoads?: Array<WeeklyTeachingLoad>;
}

export { Group as Group };
