import { Module } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { SchedulerController } from './scheduler.controller';
// import { SchedulerService } from './scheduler.service';
// import { SchedulerController } from './scheduler.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule,
    PrismaModule
  ],
  providers: [SchedulerService],
  controllers: [SchedulerController]
})
export class SchedulerModule {}
