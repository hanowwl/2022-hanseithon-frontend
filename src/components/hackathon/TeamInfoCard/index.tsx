import React from "react";

import * as S from "./styled";

export type TeamType = "game" | "living" | string;

export interface TeamInfoCardProps {
  name: string;
  type: TeamType;
  description: string;
  owner: string;
  members: string[];
}

export const TeamInfoCard: React.FC<TeamInfoCardProps> = ({
  name,
  type,
  description,
  owner,
  members,
}) => (
  <S.TeamInfoCardContainer>
    <S.TeamInfoCardTypeBox>{type}</S.TeamInfoCardTypeBox>
    <div>
      <S.TeamInfoCardTitle>{name}</S.TeamInfoCardTitle>
      <S.TeamInfoCardDescription>{description}</S.TeamInfoCardDescription>
      <div style={{ marginTop: "1.5rem" }}>
        <S.TeamInfoCardUserContainer>
          <S.TeamInfoCardUserMembersTitle>
            팀장 : &nbsp;
          </S.TeamInfoCardUserMembersTitle>
          <S.TeamInfoCardUserMembersBox>{owner}</S.TeamInfoCardUserMembersBox>
        </S.TeamInfoCardUserContainer>
        <S.TeamInfoCardUserContainer>
          <S.TeamInfoCardUserMembersTitle>
            팀원 : &nbsp;
          </S.TeamInfoCardUserMembersTitle>
          <S.TeamInfoCardUserMembersContainer>
            {members.map((member) => (
              <S.TeamInfoCardUserMembersBox>
                {member}
              </S.TeamInfoCardUserMembersBox>
            ))}
          </S.TeamInfoCardUserMembersContainer>
        </S.TeamInfoCardUserContainer>
      </div>
    </div>
  </S.TeamInfoCardContainer>
);
