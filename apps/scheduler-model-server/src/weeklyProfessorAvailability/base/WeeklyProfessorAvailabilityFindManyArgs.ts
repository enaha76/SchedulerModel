/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WeeklyProfessorAvailabilityWhereInput } from "./WeeklyProfessorAvailabilityWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WeeklyProfessorAvailabilityOrderByInput } from "./WeeklyProfessorAvailabilityOrderByInput";

@ArgsType()
class WeeklyProfessorAvailabilityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WeeklyProfessorAvailabilityWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WeeklyProfessorAvailabilityWhereInput, { nullable: true })
  @Type(() => WeeklyProfessorAvailabilityWhereInput)
  where?: WeeklyProfessorAvailabilityWhereInput;

  @ApiProperty({
    required: false,
    type: [WeeklyProfessorAvailabilityOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WeeklyProfessorAvailabilityOrderByInput], { nullable: true })
  @Type(() => WeeklyProfessorAvailabilityOrderByInput)
  orderBy?: Array<WeeklyProfessorAvailabilityOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WeeklyProfessorAvailabilityFindManyArgs as WeeklyProfessorAvailabilityFindManyArgs };
