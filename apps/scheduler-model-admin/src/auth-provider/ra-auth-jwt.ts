import { gql } from "@apollo/client/core";
import { AuthProvider } from "react-admin";
import {
  CREDENTIALS_LOCAL_STORAGE_ITEM,
  USER_DATA_LOCAL_STORAGE_ITEM,
} from "../constants";
import { Credentials, LoginMutateResult } from "../types";
import { apolloClient } from "../data-provider/graphqlDataProvider";

const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(credentials: { username: $username, password: $password }) {
      accessToken
      user {
        username
        roles
      }
    }
  }
`;

export const jwtAuthProvider: AuthProvider = {
  login: async (credentials: Credentials) => {
    const userData = await apolloClient.mutate<LoginMutateResult>({
      mutation: LOGIN,
      variables: {
        ...credentials,
      },
    });

    // if (userData && userData.data?.login.user.username) {
    //   localStorage.setItem(
    //     CREDENTIALS_LOCAL_STORAGE_ITEM,
    //     createBearerAuthorizationHeader(userData.data.login.access_token)
    //   );
    //   localStorage.setItem(
    //     USER_DATA_LOCAL_STORAGE_ITEM,
    //     JSON.stringify(userData.data)
    //   );
    //   return Promise.resolve();
    // }

    if (userData && userData.data?.login.user.username) {
      localStorage.setItem(
        CREDENTIALS_LOCAL_STORAGE_ITEM,
        createBearerAuthorizationHeader(userData.data.login?.access_token)
      );
      localStorage.setItem(
        USER_DATA_LOCAL_STORAGE_ITEM,
        JSON.stringify(userData.data)
      );
      return Promise.resolve();
    }
    return Promise.reject();
  },
  logout: () => {
    localStorage.removeItem(CREDENTIALS_LOCAL_STORAGE_ITEM);
    return Promise.resolve();
  },
  checkError: ({ status }: any) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem(CREDENTIALS_LOCAL_STORAGE_ITEM);
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem(CREDENTIALS_LOCAL_STORAGE_ITEM)
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: () => Promise.reject("Unknown method"),
  getIdentity: () => {
    const str = localStorage.getItem(USER_DATA_LOCAL_STORAGE_ITEM);
    const userData: LoginMutateResult = JSON.parse(str || "");

    return Promise.resolve({
      id: userData.login.user.username,
      fullName: userData.login.user.username,
      avatar: undefined,
    });
  },
};

export function createBearerAuthorizationHeader(accessToken: string) {
  return `Bearer ${accessToken}`;
}


