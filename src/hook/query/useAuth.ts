import { AxiosError } from "axios";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import {
  APIErrorResponse,
  APIResponse,
  APIResponseStatusType,
  checkIsInternalNetwork,
  setAccessToken,
} from "src/api";
import {
  AllUserProfileResponse,
  getAllUserProfile,
  getRefreshTokenAuth,
  getUserProfile,
  login,
  LoginFormValues,
  register,
  RegisterStep3Values,
  UserProfileResponse,
} from "src/api/user";
import { globalAccessToken } from "src/store";

export const useLogin = (): UseMutationResult<
  APIResponse<{ accessToken: string; refreshToken: string }>,
  AxiosError<APIErrorResponse>,
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
      toast.success("로그인에 성공하셨습니다.", {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
      navigate("/");
    },
    onError: (data) => {
      toast.error(data.response?.data.message, {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    },
    retry: 0,
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const setToken = useSetRecoilState(globalAccessToken);
  const navigate = useNavigate();

  const deleteUserInformation = () => {
    setToken({ accessToken: "", state: false });
    localStorage.removeItem("refreshToken");
    queryClient.removeQueries("useFetchUser");
    navigate("/auth/login");
    toast.success("로그아웃에 성공하셨어요!", {
      autoClose: 3000,
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: "dark",
    });
  };

  return { deleteUserInformation };
};

export const useRegister = (): UseMutationResult<
  APIResponse<{}>,
  AxiosError<APIErrorResponse>,
  RegisterStep3Values
> => {
  const navigate = useNavigate();
  return useMutation("useRegister", register, {
    onSuccess: () => {
      navigate("/auth/login");
      toast.success("회원가입에 성공하셨어요!", {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    },
    onError: (data) => {
      toast.error(data.response?.data.message, {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    },
    retry: 0,
  });
};

export const useFetchUser = (): UseQueryResult<
  APIResponse<UserProfileResponse>,
  AxiosError<APIErrorResponse>
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
      staleTime: 36000,
    },
  );
};

export const useFetchAllUser = (): UseQueryResult<
  APIResponse<AllUserProfileResponse[]>,
  AxiosError<APIErrorResponse>
> =>
  useQuery(
    "useFetchAllUser",
    () => getAllUserProfile(),

    {
      retry: 0,
      staleTime: 36000,
    },
  );

export const useAuthenticateInternalNetwork = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: APIResponse<"">) => void;
  onError?: (error: AxiosError<APIErrorResponse>) => void;
}): UseQueryResult<APIResponse<"">, AxiosError<APIErrorResponse>> =>
  useQuery("useAuthenticateInternalNetwork", () => checkIsInternalNetwork(), {
    retry: 0,
    onSuccess,
    onError,
  });
