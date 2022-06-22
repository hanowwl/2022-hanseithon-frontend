import { useMutation, UseMutationResult } from "react-query";

import {
  APIErrorResponse,
  APIResponse,
  APIResponseStatusType,
  setAccessToken,
} from "src/api";
import { login, LoginFormValues } from "src/api/user";

export const useLogin = (): UseMutationResult<
  APIResponse<{ accessToken: string; refreshToken: string }>,
  APIErrorResponse,
  LoginFormValues
> =>
  useMutation("useLogin", login, {
    onSuccess: (data: {
      Status: APIResponseStatusType;
      Message: string;
      result: { accessToken: string; refreshToken: string };
    }) => {
      localStorage.setItem("accessToken", data.result.accessToken);
      localStorage.setItem("refreshToken", data.result.refreshToken);
      setAccessToken(data.result.accessToken);
    },
  });
