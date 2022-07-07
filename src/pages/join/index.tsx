import React from "react";

import { Button, DefaultLayout } from "src/components";
import { useModal } from "src/hook";

import * as S from "./styled";

export const JoinPage: React.FC = () => {
  const { addModal, removeCurrentModal } = useModal();

  const handleOnClickCreateTeam = () => {
    addModal({
      type: "CONFIRM",
      props: {
        title: "팀 생성하기",
        content: <div />,
        button: {
          text: "생성하기",
        },
        handleOnConfirm: () => removeCurrentModal(),
        handleOnClose: () => removeCurrentModal(),
      },
    });
  };

  const handleOnClickJoinTeam = () => {
    addModal({
      type: "ALERT",
      props: {
        title: "초대키 입력하기",
        content: <div />,
        button: {
          text: "참가하기",
        },
        handleOnConfirm: () => removeCurrentModal(),
      },
    });
  };

  return (
    <DefaultLayout conversion={false}>
      <section style={{ marginTop: "10rem", paddingBottom: "20rem" }}>
        <S.TitleContainer>
          <S.JoinDeadLineTitle>
            by the <strong>TEAM BUILD</strong> deadline
          </S.JoinDeadLineTitle>
          <S.JoinDeadLineTimeText>30:00:00</S.JoinDeadLineTimeText>
        </S.TitleContainer>
        <S.JoinPageSectionContentContainer>
          <S.HanseithonJoinContainer>
            <S.HanseithonTitleText>hanseithon : o</S.HanseithonTitleText>
            <S.HanseithonDescriptionText>
              안녕하세요, 한세사이버보안고등학교 학생회 주관 ‘한세톤 : O’의 신청
              페이지입니다.
              <br />
              한세톤의 참가부터 운영까지 모든 것이 이 페이지에서 이루어질
              예정입니다.
              <br />
              개발에 정답은 없습니다. 이곳에서 팀원과 함께 자신이 원하는 대로
              길을 개척해나가세요.
              <br />
              한세톤:O에 참가하여 개발을 통해 여러분의 꿈을 세상에 보여주세요.
            </S.HanseithonDescriptionText>
            <S.HanseithonDateText>
              <strong>참가 신청</strong> : 7월 11일 00시 - 7월 15일 23시 59분
              <br />
              <strong>참가 신청 마감</strong> : 7월 11일 00시 - 7월 15일 23시
              59분
            </S.HanseithonDateText>
          </S.HanseithonJoinContainer>
          <S.ButtonContainer>
            <Button variant="contained" onClick={handleOnClickCreateTeam}>
              팀 생성하기
            </Button>
            <Button variant="outlined" onClick={handleOnClickJoinTeam}>
              팀 참가하기
            </Button>
          </S.ButtonContainer>
        </S.JoinPageSectionContentContainer>
      </section>
    </DefaultLayout>
  );
};
