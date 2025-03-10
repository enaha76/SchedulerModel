/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfessorAssignmentListRelationFilter } from "../../professorAssignment/base/ProfessorAssignmentListRelationFilter";
import { ScheduleListRelationFilter } from "../../schedule/base/ScheduleListRelationFilter";
import { WeeklyProfessorAvailabilityListRelationFilter } from "../../weeklyProfessorAvailability/base/WeeklyProfessorAvailabilityListRelationFilter";

@InputType()
class ProfessorWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  department?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProfessorAssignmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProfessorAssignmentListRelationFilter)
  @IsOptional()
  @Field(() => ProfessorAssignmentListRelationFilter, {
    nullable: true,
  })
  professorAssignments?: ProfessorAssignmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ScheduleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ScheduleListRelationFilter)
  @IsOptional()
  @Field(() => ScheduleListRelationFilter, {
    nullable: true,
  })
  schedule?: ScheduleListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => WeeklyProfessorAvailabilityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WeeklyProfessorAvailabilityListRelationFilter)
  @IsOptional()
  @Field(() => WeeklyProfessorAvailabilityListRelationFilter, {
    nullable: true,
  })
  weeklyProfessorAvailability?: WeeklyProfessorAvailabilityListRelationFilter;
}

export { ProfessorWhereInput as ProfessorWhereInput };
