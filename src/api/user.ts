import { APIResponse, API_SUFFIX, instance, setAccessToken } from ".";
import { Team } from "./team";

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
  team: Omit<Team, "member"> & { owner: string };
}

export type RegisterStep3Values = {
  username: string;
  password: string;
  passwordCheck: string;
  phone: string;
  email: string;
  name: string;
  studentDepartment: string;
  studentGrade: number;
  studentClassroom: number;
  studentNumber: number;
};

export type UserNameResponse = {
  name: string;
};

export type AllUserProfileResponse = {
  file?: {
    id: string;
    name: string;
    size: number;
    type: "middle" | "final";
    team: string;
    teamType: "GAME" | "LIVING";
  };
  team?: {
    name: string;
    type: "GAME" | "LIVING";
    owner: { name: string };
    createdAt: string;
    description: string;
    members: UserNameResponse[];
  };
  user: {
    name: string;
    position: string;
    studentDepartment: string;
    profileImage?: string;
  };
};

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

export const register = async ({
  username,
  password,
  passwordCheck,
  phone,
  email,
  name,
  studentDepartment,
  studentGrade,
  studentClassroom,
  studentNumber,
}: RegisterStep3Values) => {
  const { data } = await instance.post(API_SUFFIX.REGISTER, {
    username,
    password,
    passwordCheck,
    phone,
    email,
    name,
    studentDepartment,
    studentGrade,
    studentClassroom,
    studentNumber,
  });
  return data;
};

export const getUserProfile = async (): Promise<
  APIResponse<UserProfileResponse>
> => {
  const { data } = await instance.get(API_SUFFIX.PROFILE);
  return data;
};

export const getAllUserProfile = async (): Promise<
  APIResponse<AllUserProfileResponse[]>
> => {
  const { data } = await instance.get(API_SUFFIX.USERS);
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
