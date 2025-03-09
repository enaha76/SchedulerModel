import * as graphql from "@nestjs/graphql";
import { ExceptionalClosureResolverBase } from "./base/exceptionalClosure.resolver.base";
import { ExceptionalClosure } from "./base/ExceptionalClosure";
import { ExceptionalClosureService } from "./exceptionalClosure.service";

@graphql.Resolver(() => ExceptionalClosure)
export class ExceptionalClosureResolver extends ExceptionalClosureResolverBase {
  constructor(protected readonly service: ExceptionalClosureService) {
    super(service);
  }
}
