import axios from "axios";

export const API_SUFFIX = {
  BASEURL: "/api",
  LOGIN: "/auth/login",
  USERS: "/users",
  PROFILE: "/users/profile",
  REFRESH: "/auth/refresh",
  REGISTER: "/auth/register",
  TEAM: "/teams",
  JOIN_TEAM: "/teams/join",
  TIME: "/time",
};

export const instance = axios.create({
  baseURL: API_SUFFIX.BASEURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export type APIResponseStatusType = "SUCCESS" | "FAILED";

export interface APIResponse<T = unknown> {
  status: APIResponseStatusType;
  message: string;
  result: T;
}

export interface APIErrorResponse {
  status: "FAILED";
  message: string;
  result?: null;
}

export const setAccessToken = (token: string | null) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};

export interface TimeResponse {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export const getServerTime = async (): Promise<APIResponse<TimeResponse>> => {
  const { data } = await instance.get(API_SUFFIX.TIME);
  return data;
};
