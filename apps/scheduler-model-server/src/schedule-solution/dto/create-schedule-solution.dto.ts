// dto/create-schedule-solution.dto.ts
import { IsNotEmpty, IsNumber, IsBoolean, IsOptional, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleSolutionDto {
  @ApiProperty({
    description: 'ID of the academic week',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  weekId!: number;

  @ApiProperty({
    description: 'Status of the optimization',
    example: 'Optimal',
    enum: ['Optimal', 'Feasible', 'No solution'],
  })
  @IsNotEmpty()
  @IsString()
  status!: string;

  @ApiProperty({
    description: 'Statistics about the optimization process',
    required: false,
    example: {
      objectiveValue: 0,
      wallTime: 0.123,
      iterations: 42,
      nodes: 7,
    },
  })
  @IsOptional()
  @IsObject()
  statistics?: Record<string, any>;

  @ApiProperty({
    description: 'Whether this solution is selected as the active one',
    required: false,
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  isSelected?: boolean;
}
