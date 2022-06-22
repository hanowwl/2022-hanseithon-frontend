import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query";
import { useRecoilState } from "recoil";

import {
  APIErrorResponse,
  APIResponse,
  APIResponseStatusType,
  setAccessToken,
} from "src/api";
import {
  getUserProfile,
  login,
  LoginFormValues,
  UserProfileResponse,
} from "src/api/user";
import { globalAccessToken } from "src/store";

export const useLogin = (): UseMutationResult<
  APIResponse<{ accessToken: string; refreshToken: string }>,
  APIErrorResponse,
  LoginFormValues
> => {
  const [token, setToken] = useRecoilState(globalAccessToken);
  return useMutation("useLogin", login, {
    onSuccess: (data: {
      Status: APIResponseStatusType;
      Message: string;
      result: { accessToken: string; refreshToken: string };
    }) => {
      localStorage.setItem("refreshToken", data.result.refreshToken);
      setToken({ accessToken: data.result.accessToken });
      setAccessToken(token.accessToken);
    },
  });
};

export const useFetchUser = (): UseQueryResult<
  APIResponse<UserProfileResponse>,
  APIErrorResponse
> => {
  const [token, setToken] = useRecoilState(globalAccessToken);
  return useQuery(
    "useFetchUser",
    () => {
      if (token) setAccessToken(token.accessToken);
      return getUserProfile();
    },
    {
      onError: () => {
        setToken({ accessToken: "" });
        setAccessToken(null);
      },
      retry: 0,
    },
  );
};
