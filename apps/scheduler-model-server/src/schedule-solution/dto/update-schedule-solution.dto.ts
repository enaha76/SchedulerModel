
// dto/update-schedule-solution.dto.ts
import { IsBoolean, IsOptional, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateScheduleSolutionDto {
  @ApiProperty({
    description: 'Status of the optimization',
    required: false,
    example: 'Optimal',
    enum: ['Optimal', 'Feasible', 'No solution'],
  })
  @IsOptional()
  @IsString()
  status?: string;

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
  })
  @IsOptional()
  @IsBoolean()
  isSelected?: boolean;
}