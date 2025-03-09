import { JsonValue } from "type-fest";

export type Credentials = {
  username: string;
  password: string;
};

export type LoginMutateResult = {
  login: {
    accessToken: string;
    user: {
      username: string;
      roles: string[];
    }
  };
};

export type InputJsonValue = Omit<JsonValue, "null">;