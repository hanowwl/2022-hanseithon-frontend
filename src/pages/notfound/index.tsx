import React from "react";

import { AuthLayout, Button } from "src/components";

import * as S from "./styled";

export const NotFoundPage: React.FC = () => (
  <AuthLayout title="NotFound" src="/">
    <S.NotFoundPageWrapper>
      <S.NotFoundText>404</S.NotFoundText>
      <S.NotFoundDescription>
        찾을 수 없는 페이지에요! <br />
        다른 콘텐츠를 보러 가보시겠어요?
      </S.NotFoundDescription>
      <S.NotFoundGoToMainText to="/hackathon">
        <Button variant="contained">메인 화면으로</Button>
      </S.NotFoundGoToMainText>
    </S.NotFoundPageWrapper>
  </AuthLayout>
);

export default NotFoundPage;
