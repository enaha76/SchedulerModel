import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SchedulerService } from './scheduler.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { Public } from '../auth/decorators/public.decorator';

// DTO for request
class OptimizeScheduleDto {
  weekId!: number;
}

@ApiTags('scheduler')
@Controller('scheduler')
export class SchedulerController {
  constructor(
    protected readonly service: SchedulerService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  
  @Post('transform-data')
  @ApiOperation({ summary: 'Transform data for scheduler based on week ID' })
  async transformData(@Body() dto: any) {
    try {
      const data = await this.service.transformDataForScheduler(dto.weekId);
      return {
        success: true,
        data
      };
    } catch (error: any) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Failed to transform data: ${error.message}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  
  @Post('optimize-schedule')
  @ApiOperation({ summary: 'Optimize schedule using FastAPI service' })
  async optimizeSchedule(@Body() dto: OptimizeScheduleDto) {
    try {
      // 1. Transform data for the scheduler
      const schedulerData = await this.service.transformDataForScheduler(dto.weekId);
      
      // 2. Get the FastAPI URL from environment variables (defaulting to localhost:8000)
      const fastApiUrl = this.configService.get<string>('FASTAPI_URL') || 'http://localhost:8000';
      
      // 3. Call the FastAPI endpoint
      const response = await firstValueFrom(
        this.httpService.post(`${fastApiUrl}/api/optimize-schedule`, {
          scheduler_data: schedulerData
        })
      );
      
      // 4. Extract the optimization solution
      const solution = response.data;
      
      // 5. Store the schedule in the database
      const storeResult = await this.service.storeScheduleResults(dto.weekId, solution);
      
      // 6. Return the combined result
      return {
        success: true,
        solution: solution,
        storageResult: storeResult
      };
    } catch (error: any) {
      console.error('Error optimizing schedule:', error);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Failed to optimize schedule: ${error?.message || error?.response?.data || 'Unknown error'}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}