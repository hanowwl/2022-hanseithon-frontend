/* eslint-disable no-restricted-syntax */
import axios from "axios";
import React from "react";

import { FileSubmitProps } from "src/pages";

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
  FILE: "/files/upload",
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

export const checkIsInternalNetwork = async (): Promise<APIResponse<"">> => {
  const { data } = await instance.post(
    "http://172.16.255.100/api/auth/internal-auth",
  );
  return data;
};

export const fileUpload = async (
  uploadData: FileSubmitProps,
  {
    onUploadProgress,
  }: {
    onUploadProgress: React.Dispatch<React.SetStateAction<number>>;
  },
): Promise<APIResponse<{}>> => {
  const blobUploadData = uploadData as Blob;
  const formData = new FormData();
  formData.append("file", blobUploadData);
  const { data } = await instance.post(API_SUFFIX.FILE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      const progress = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total,
      );
      onUploadProgress(progress);
    },
  });
  return data;
};
