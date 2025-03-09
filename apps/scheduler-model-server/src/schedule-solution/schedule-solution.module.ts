import { Module } from '@nestjs/common';
import { ScheduleSolutionService } from './schedule-solution.service';
import { ScheduleSolutionController } from './schedule-solution.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], 
  providers: [ScheduleSolutionService],
  controllers: [ScheduleSolutionController]
})
export class ScheduleSolutionModule {}
