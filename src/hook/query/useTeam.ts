/* eslint-disable react-hooks/rules-of-hooks */
import { AxiosError } from "axios";
import { useMutation, UseMutationResult } from "react-query";
import { toast } from "react-toastify";

import { APIErrorResponse, APIResponse } from "src/api";
import {
  createTeam,
  CreateTeamFormValues,
  joinTeam,
  JoinTeamFormValues,
  Team,
} from "src/api/team";

export interface UseTeamHooks {
  onSuccess: (data: APIResponse<Team>) => void;
}

export const useCreateTeam = ({
  onSuccess,
}: UseTeamHooks): UseMutationResult<
  APIResponse<Team>,
  AxiosError<APIErrorResponse>,
  CreateTeamFormValues
> =>
  useMutation("useCreateTeam", createTeam, {
    onSuccess,
    onError: (data) => {
      toast.error(data.response?.data.message, {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    },
    retry: 0,
  });

export const useJoinTeam = ({
  onSuccess,
}: UseTeamHooks): UseMutationResult<
  APIResponse<Team>,
  AxiosError<APIErrorResponse>,
  JoinTeamFormValues
> =>
  useMutation("useJoinTeam", joinTeam, {
    onSuccess,
    onError: (data) => {
      toast.error(data.response?.data.message, {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    },
    retry: 0,
  });
