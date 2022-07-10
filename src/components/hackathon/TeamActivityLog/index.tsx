/* eslint-disable react/no-unused-prop-types */
import React from "react";

import { TeamInfoCardProps } from "../TeamInfoCard";
import * as S from "./styled";

export type TeamActionType = "produce" | "submission" | string;

export interface TeamActivityLogProps {
  name: string;
  position: string;
  department: string;
  action: TeamActionType;
  profileImage?: string;
  team?: TeamInfoCardProps;
}

export const TeamActivityLog: React.FC<TeamActivityLogProps> = ({
  name,
  position,
  department,
  action,
  team,
  profileImage,
}) => (
  <S.TeamActivityLogContainer>
    <S.TeamActivityLogProfileImage src={profileImage} alt="" />
    <S.TeamActivityLogInfoContainer>
      <S.TeamActivityLogInfoText>
        {action === "produce" ? (
          <span>
            <strong>{name}</strong>님이 팀 <marker>{team?.name}</marker>를
            생성하셨습니다.
          </span>
        ) : (
          <span>
            <strong>{name}</strong>님이 팀 <marker>{team?.name}</marker>의
            파일을 제출하셨습니다.
          </span>
        )}
      </S.TeamActivityLogInfoText>
      <S.TeamActivityLogInfoText>
        {position} {department}
      </S.TeamActivityLogInfoText>
    </S.TeamActivityLogInfoContainer>
  </S.TeamActivityLogContainer>
);
