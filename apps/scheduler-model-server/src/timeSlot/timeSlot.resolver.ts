import * as graphql from "@nestjs/graphql";
import { TimeSlotResolverBase } from "./base/timeSlot.resolver.base";
import { TimeSlot } from "./base/TimeSlot";
import { TimeSlotService } from "./timeSlot.service";

@graphql.Resolver(() => TimeSlot)
export class TimeSlotResolver extends TimeSlotResolverBase {
  constructor(protected readonly service: TimeSlotService) {
    super(service);
  }
}
