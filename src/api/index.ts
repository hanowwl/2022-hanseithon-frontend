import axios from "axios";

export const API_SUFFIX = {
  LOGIN: "/api/auth/login",
  PROFILE: "/api/users/profile",
  REFRESH: "/api/auth/refresh",
};

export const instance = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export type APIResponseStatusType = "SUCCESS" | "FAILED";

export interface APIResponse<T = unknown> {
  Status: APIResponseStatusType;
  Message: string;
  result: T;
}

export interface APIErrorResponse {
  Status: "FAILED";
  Message: string;
  result?: null;
}

export const setAccessToken = (token: string | null) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};
