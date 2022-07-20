import React from "react";

import { UserNameResponse } from "src/api/user";
import { TEAM_PART, TEAM_TYPE } from "src/constants";

import * as S from "./styled";

export interface TeamInfoCardProps {
  name: string;
  type: TEAM_TYPE;
  owner: { name: string };
  description: string;
  members: UserNameResponse[];
}

export const TeamInfoCard: React.FC<TeamInfoCardProps> = ({
  name,
  type,
  owner,
  description,
  members,
}) => (
  <S.TeamInfoCardContainer>
    <S.TeamInfoCardTypeBox>{TEAM_PART[type]}</S.TeamInfoCardTypeBox>
    <div>
      <S.TeamInfoCardTitle>{name}</S.TeamInfoCardTitle>
      <S.TeamInfoCardDescription>{description}</S.TeamInfoCardDescription>
      <div style={{ marginTop: "1.5rem" }}>
        <S.TeamInfoCardUserContainer>
          <S.TeamInfoCardUserMembersTitle>
            팀장 : &nbsp;
          </S.TeamInfoCardUserMembersTitle>
          <S.TeamInfoCardUserMembersBox>
            {owner.name}
          </S.TeamInfoCardUserMembersBox>
        </S.TeamInfoCardUserContainer>
        <S.TeamInfoCardUserContainer>
          <S.TeamInfoCardUserMembersTitle>
            팀원 : &nbsp;
          </S.TeamInfoCardUserMembersTitle>
          <S.TeamInfoCardUserMembersContainer>
            {members.map(
              (member) =>
                owner.name !== member.name && (
                  <S.TeamInfoCardUserMembersBox>
                    {member.name}
                  </S.TeamInfoCardUserMembersBox>
                ),
            )}
          </S.TeamInfoCardUserMembersContainer>
        </S.TeamInfoCardUserContainer>
      </div>
    </div>
  </S.TeamInfoCardContainer>
);
