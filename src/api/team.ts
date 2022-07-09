import { TEAM_MEMBER_POSITION_TYPE, TEAM_TYPE } from "src/constants";

import { APIResponse, API_SUFFIX, instance } from ".";

export interface CreateTeamFormValues {
  name: string;
  description: string;
  position: TEAM_MEMBER_POSITION_TYPE;
  type: TEAM_TYPE;
}

export interface JoinTeamFormValues {
  position: TEAM_MEMBER_POSITION_TYPE;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  inviteCode: string;
  owner: TeamUser;
  members: TeamMember[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamUser {
  id: string;
  name: string;
  studentClassroom: number;
  studentDepartment: string;
  studentGrade: number;
  studentNumber: number;
}

export interface TeamMember {
  id: string;
  position: TEAM_MEMBER_POSITION_TYPE;
  user: TeamUser;
}

export const createTeam = async ({
  name,
  description,
  position,
  type,
}: CreateTeamFormValues): Promise<APIResponse<Team>> => {
  const { data } = await instance.post<APIResponse<Team>>(API_SUFFIX.TEAM, {
    name,
    description,
    position,
    type,
  });
  data.result.createdAt = new Date(data.result.createdAt);
  data.result.updatedAt = new Date(data.result.updatedAt);

  return data;
};

export const joinTeam = async (
  inviteCode: string,
  { position }: JoinTeamFormValues,
) => {
  const { data } = await instance.post<APIResponse<Team>>(
    `${API_SUFFIX.JOIN_TEAM}/${inviteCode}`,
    {
      position,
    },
  );
  data.result.createdAt = new Date(data.result.createdAt);
  data.result.updatedAt = new Date(data.result.updatedAt);

  return data;
};
