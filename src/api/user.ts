import { APIResponse, API_SUFFIX, instance } from ".";

export interface LoginFormValues {
  username: string;
  password: string;
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
