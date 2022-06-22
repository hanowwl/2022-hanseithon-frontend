import { APIResponse, API_SUFFIX, instance } from ".";

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

export const getUserProfile = async (): Promise<UserProfileResponse> => {
  const { data } = await instance.get("/");
  return data;
};
