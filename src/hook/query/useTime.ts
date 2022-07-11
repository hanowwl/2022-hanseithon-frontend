import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";

import {
  APIErrorResponse,
  APIResponse,
  getServerTime,
  TimeResponse,
} from "src/api";

export const useFetchServerTime = (): UseQueryResult<
  APIResponse<TimeResponse>,
  AxiosError<APIErrorResponse>
> =>
  useQuery("useFetchServerTime", () => getServerTime(), {
    retry: 0,
    staleTime: 36000,
  });
