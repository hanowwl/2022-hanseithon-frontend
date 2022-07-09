import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Button, DefaultLayout } from "src/components";
import { useModal } from "src/hook";
import { useFetchUser } from "src/hook/query";

import { CreateTeamModalContent, JoinTeamModalContent } from "./modal";
import * as S from "./styled";

export const JoinPage: React.FC = () => {
  const navigate = useNavigate();
  const { addModal, removeCurrentModal } = useModal();
  const { data: user } = useFetchUser();
  const createModalFormRef = useRef<HTMLFormElement>(null);
  const joinModalFormRef = useRef<HTMLFormElement>(null);

  const addRequireLoginModal = () => {
    addModal({
      type: "default",
      props: {
        type: "ALERT",
        title: "로그인이 필요한 작업이에요",
        content: "",
        button: {
          text: "로그인하러 가기",
        },
        handleOnConfirm: () => {
          removeCurrentModal();
          navigate("/auth/login");
        },
      },
    });
  };

  const handleOnClickShowTeamInfo = () =>
    addModal({
      type: "default",
      props: {
        type: "ALERT",
        title: `${user?.result.team.name} 팀의 초대코드에요`,
        content: <h2>join/{user?.result.team.inviteCode}</h2>,
        button: {
          text: "닫기",
        },
        handleOnConfirm: () => removeCurrentModal(),
      },
    });

  const handleOnClickCreateTeam = () => {
    if (!user?.result) return addRequireLoginModal();
    if (user?.result.team !== null) return handleOnClickShowTeamInfo();

    return addModal({
      type: "team",
      props: {
        width: "47rem",
        title: "팀 생성하기",
        description: "한세톤 참여를 위해 팀 생성을 진행해주세요 !",
        content: <CreateTeamModalContent ref={createModalFormRef} />,
        closeButton: {
          text: "취소하기",
        },
        submitButton: {
          text: "생성하기",
        },
        handleOnSubmit: () => {
          createModalFormRef.current?.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true }),
          );
        },
        handleOnClose: () => removeCurrentModal(),
      },
    });
  };

  const handleOnClickJoinTeam = () => {
    if (!user?.result) return addRequireLoginModal();
    if (user?.result.team !== null) return handleOnClickShowTeamInfo();

    return addModal({
      type: "team",
      props: {
        width: "47rem",
        title: "팀 참가하기",
        description: "한세톤 참여를 위해 팀 참가를 진행해주세요 !",
        content: <JoinTeamModalContent ref={joinModalFormRef} />,
        closeButton: {
          text: "취소하기",
        },
        submitButton: {
          text: "참가하기",
        },
        handleOnSubmit: () => {
          joinModalFormRef.current?.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true }),
          );
        },
        handleOnClose: () => removeCurrentModal(),
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
            <Button
              variant="contained"
              onClick={
                user?.result.team !== null
                  ? handleOnClickShowTeamInfo
                  : handleOnClickCreateTeam
              }
            >
              {user?.result.team !== null ? "초대코드 확인하기" : "팀 생성하기"}
            </Button>
            {user?.result.team === null && (
              <Button variant="outlined" onClick={handleOnClickJoinTeam}>
                팀 참가하기
              </Button>
            )}
          </S.ButtonContainer>
        </S.JoinPageSectionContentContainer>
      </section>
    </DefaultLayout>
  );
};
