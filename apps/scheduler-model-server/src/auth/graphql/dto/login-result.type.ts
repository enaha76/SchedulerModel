import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field()
  username!: string;

  @Field(() => [String])
  roles!: string[];
}

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken!: string;

  @Field(() => UserType)
  user!: UserType;
}