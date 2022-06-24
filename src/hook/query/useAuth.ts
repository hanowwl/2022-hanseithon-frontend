import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import {
  APIErrorResponse,
  APIResponse,
  APIResponseStatusType,
  setAccessToken,
} from "src/api";
import {
  getRefreshTokenAuth,
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
  const navigate = useNavigate();
  const [token, setToken] = useRecoilState(globalAccessToken);
  return useMutation("useLogin", login, {
    onSuccess: (data: {
      status: APIResponseStatusType;
      message: string;
      result: { accessToken: string; refreshToken: string };
    }) => {
      localStorage.setItem("refreshToken", data.result.refreshToken);
      setToken({ accessToken: data.result.accessToken, state: true });
      setAccessToken(token.accessToken);
      navigate("/");
    },
    retry: 0,
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
      if (token.state) {
        setAccessToken(token.accessToken);
        return getUserProfile();
      }
      return getRefreshTokenAuth().then((data) => {
        setAccessToken(data.result.accessToken);
        return getUserProfile();
      });
    },
    {
      onError: () => {
        setToken({ accessToken: "", state: false });
        setAccessToken(null);
      },
      retry: 0,
      staleTime: 3600,
    },
  );
};
