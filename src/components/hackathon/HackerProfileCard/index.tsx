import React from "react";

import * as S from "./styled";

export interface HackerProfileCardProps {
  name: string;
  position: string;
  department: string;
  profileImage?: string;
}

export const HackerProfileCard: React.FC<HackerProfileCardProps> = ({
  name,
  position,
  department,
  profileImage,
}) => (
  <S.HackerProfileCardContainer>
    <S.HackerProfileImage src={profileImage} alt="" />
    <S.HackerProfileContainer>
      <S.HackerNameText>{name}</S.HackerNameText>
      <S.HackerInfoContainer>
        <S.HackerInfoText>{position}</S.HackerInfoText>
        <S.HackerInfoText>{department}</S.HackerInfoText>
      </S.HackerInfoContainer>
    </S.HackerProfileContainer>
  </S.HackerProfileCardContainer>
);
