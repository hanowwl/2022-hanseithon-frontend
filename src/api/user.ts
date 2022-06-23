import { APIResponse, API_SUFFIX, instance, setAccessToken } from ".";

export interface LoginFormValues {
  username: string;
  password: string;
}

export interface UserProfileResponse {
  id: number;
  username: string;
  name: string;
  studentDepartment: string;
  studentGrade: number;
  studentClassroom: number;
  studentNumber: number;
  networkVerified: boolean;
}

export const login = async ({
  username,
  password,
}: LoginFormValues): Promise<
  APIResponse<{ accessToken: string; refreshToken: string }>
> => {
  const { data } = await instance.post(API_SUFFIX.LOGIN, {
    username,
    password,
  });
  return data;
};

export const getUserProfile = async (): Promise<
  APIResponse<UserProfileResponse>
> => {
  const { data } = await instance.get(API_SUFFIX.PROFILE);
  return data;
};

export const getRefreshTokenAuth = async (): Promise<
  APIResponse<{ accessToken: string }>
> => {
  const token = localStorage.getItem("refreshToken");
  if (token) setAccessToken(token);
  const { data } = await instance.post(API_SUFFIX.REFRESH);
  return data;
};
