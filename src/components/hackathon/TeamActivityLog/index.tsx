/* eslint-disable no-shadow */
import React from "react";

import { AllUserProfileResponse } from "src/api/user";
import { TeamCategory } from "src/constants";

import * as S from "./styled";

export const TeamActivityLog: React.FC<AllUserProfileResponse> = ({
  user,
  team,
}) => (
  <S.TeamActivityLogContainer>
    <S.TeamActivityLogProfileImage src={user.profileImage} alt="" />
    <S.TeamActivityLogInfoContainer>
      <S.TeamActivityLogInfoText>
        {user?.name === team?.owner.name ? (
          <span>
            <strong>{user.name}</strong>님이 <marker>{team?.name}</marker> 팀을
            생성하셨습니다.
          </span>
        ) : (
          <span>
            <strong>{user.name}</strong>님이 <marker>{team?.name}</marker> 팀을
            참가하셨습니다.
          </span>
        )}
      </S.TeamActivityLogInfoText>

      <S.TeamActivityLogInfoText>
        {TeamCategory[user.position]} @{user.studentDepartment}
      </S.TeamActivityLogInfoText>
    </S.TeamActivityLogInfoContainer>
  </S.TeamActivityLogContainer>
);
