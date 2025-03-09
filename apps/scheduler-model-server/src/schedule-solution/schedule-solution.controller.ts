import { Controller, Get, Post, Body, Param, Query, Delete, Patch, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { ScheduleSolutionService } from './schedule-solution.service';
import { CreateScheduleSolutionDto } from './dto/create-schedule-solution.dto';
import { UpdateScheduleSolutionDto } from './dto/update-schedule-solution.dto';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('schedule-solutions')
@Controller('schedule-solutions')
export class ScheduleSolutionController {
  constructor(private readonly service: ScheduleSolutionService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new schedule solution' })
  async create(@Body() createDto: CreateScheduleSolutionDto) {
    try {
      return await this.service.create(createDto);
    } catch (error: any) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Failed to create schedule solution: ${error?.message || 'Unknown error'}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  
  @Get()
  @ApiOperation({ summary: 'Find all schedule solutions' })
  @ApiQuery({ name: 'weekId', required: false, type: Number })
  async findAll(@Query('weekId') weekId?: string) {
    try {
      return await this.service.findAll(weekId ? parseInt(weekId) : undefined);
    } catch (error: any) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Failed to get schedule solutions: ${error?.message || 'Unknown error'}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  
  @Get(':id')
  @ApiOperation({ summary: 'Find a schedule solution by ID' })
  @ApiParam({ name: 'id', type: Number })
  async findOne(@Param('id') id: string) {
    try {
      const solution = await this.service.findOne(parseInt(id));
      if (!solution) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: `Schedule solution with ID ${id} not found`,
          },
          HttpStatus.NOT_FOUND,
        );
      }
      return solution;
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Failed to get schedule solution: ${error?.message || 'Unknown error'}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a schedule solution' })
  @ApiParam({ name: 'id', type: Number })
  async update(@Param('id') id: string, @Body() updateDto: UpdateScheduleSolutionDto) {
    try {
      const solution = await this.service.update(parseInt(id), updateDto);
      if (!solution) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: `Schedule solution with ID ${id} not found`,
          },
          HttpStatus.NOT_FOUND,
        );
      }
      return solution;
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Failed to update schedule solution: ${error?.message || 'Unknown error'}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a schedule solution' })
  @ApiParam({ name: 'id', type: Number })
  async remove(@Param('id') id: string) {
    try {
      const solution = await this.service.remove(parseInt(id));
      if (!solution) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: `Schedule solution with ID ${id} not found`,
          },
          HttpStatus.NOT_FOUND,
        );
      }
      return solution;
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Failed to delete schedule solution: ${error?.message || 'Unknown error'}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post(':id/select')
  @ApiOperation({ summary: 'Select this solution as the active one for the week' })
  @ApiParam({ name: 'id', type: Number })
  async selectSolution(@Param('id') id: string) {
    try {
      return await this.service.selectSolution(parseInt(id));
    } catch (error: any) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Failed to select schedule solution: ${error?.message || 'Unknown error'}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}