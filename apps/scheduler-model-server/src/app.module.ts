import { Module } from "@nestjs/common";
import { AcademicWeekModule } from "./academicWeek/academicWeek.module";
import { CourseModule } from "./course/course.module";
import { GroupModule } from "./group/group.module";
import { ProfessorModule } from "./professor/professor.module";
import { TimeSlotModule } from "./timeSlot/timeSlot.module";
import { WeeklyTeachingLoadModule } from "./weeklyTeachingLoad/weeklyTeachingLoad.module";
import { WeeklyProfessorAvailabilityModule } from "./weeklyProfessorAvailability/weeklyProfessorAvailability.module";
import { ProfessorAssignmentModule } from "./professorAssignment/professorAssignment.module";
import { GroupOverlapModule } from "./groupOverlap/groupOverlap.module";
import { RoomModule } from "./room/room.module";
import { ExceptionalClosureModule } from "./exceptionalClosure/exceptionalClosure.module";
import { ScheduleModule } from "./schedule/schedule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Module({
  controllers: [],
  imports: [
    AcademicWeekModule,
    CourseModule,
    GroupModule,
    ProfessorModule,
    TimeSlotModule,
    WeeklyTeachingLoadModule,
    WeeklyProfessorAvailabilityModule,
    ProfessorAssignmentModule,
    GroupOverlapModule,
    RoomModule,
    ExceptionalClosureModule,
    ScheduleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    AuthModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
