import { APIResponse, API_SUFFIX, instance } from ".";

export interface CreateTeamFormValues {
  name: string;
  description: string;
  position: string;
}

export interface JoinTeamForValues {
  position: string;
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
  position: string;
  user: TeamUser;
}

export const createTeam = async ({
  name,
  description,
  position,
}: CreateTeamFormValues): Promise<APIResponse<Team>> => {
  const { data } = await instance.post<APIResponse<Team>>(API_SUFFIX.TEAM, {
    name,
    description,
    position,
  });
  data.result.createdAt = new Date(data.result.createdAt);
  data.result.updatedAt = new Date(data.result.updatedAt);

  return data;
};

export const joinTeam = async (
  inviteCode: string,
  { position }: JoinTeamForValues,
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
