import React from "react";

import * as S from "./styled";

export const Competition: React.FC = () => (
  <S.CompetitionContainer>
    <S.CompetitionWrapper>
      <S.CompetitionReadyText>
        아직 준비중이에요 <br /> 기다려주세요!
      </S.CompetitionReadyText>
    </S.CompetitionWrapper>
  </S.CompetitionContainer>
);
