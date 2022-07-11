import React from "react";

import { TeamCategory } from "src/constants";

import * as S from "./styled";

export interface HackerProfileCardProps {
  name: string;
  position: string;
  studentDepartment: string;
  profileImage?: string;
}

export const HackerProfileCard: React.FC<HackerProfileCardProps> = ({
  name,
  position,
  studentDepartment,
  profileImage,
}) => (
  <S.HackerProfileCardContainer>
    <S.HackerProfileImage src={profileImage} alt="" />
    <S.HackerProfileContainer>
      <S.HackerNameText>{name}</S.HackerNameText>
      <S.HackerInfoContainer>
        <S.HackerInfoText>{TeamCategory[position]}</S.HackerInfoText>
        <S.HackerInfoText>@{studentDepartment}</S.HackerInfoText>
      </S.HackerInfoContainer>
    </S.HackerProfileContainer>
  </S.HackerProfileCardContainer>
);
