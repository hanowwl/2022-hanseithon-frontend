/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { JoinDeadLineTimeText, Button, DefaultLayout } from "src/components";
import { useModal, useUrlQuery } from "src/hook";
import { useFetchUser } from "src/hook/query";

import { CreateTeamModalContent, JoinTeamModalContent } from "./modal";
import * as S from "./styled";

export const JoinPage: React.FC = () => {
  const query = useUrlQuery();
  const navigate = useNavigate();
  const { addModal, removeCurrentModal } = useModal();
  const { data: user, isSuccess } = useFetchUser();
  const createModalFormRef = useRef<HTMLFormElement>(null);
  const joinModalFormRef = useRef<HTMLFormElement>(null);
  const [inviteCode, setInviteCode] = useState(query.get("invite") || "");

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
        content: (
          <JoinTeamModalContent
            ref={joinModalFormRef}
            inviteCode={inviteCode}
          />
        ),
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
        handleOnClose: () => {
          removeCurrentModal();
          if (inviteCode) setInviteCode("");
        },
      },
    });
  };

  useEffect(() => {
    if (user && inviteCode) return handleOnClickJoinTeam();
    return undefined;
  }, [isSuccess]);

  return (
    <DefaultLayout conversion={false}>
      <section style={{ marginTop: "10rem", paddingBottom: "20rem" }}>
        <S.TitleContainer>
          <S.JoinDeadLineTitle>
            by the <strong>TEAM BUILD</strong> deadline
          </S.JoinDeadLineTitle>
          <S.JoinDeadLineTimeText>
            <JoinDeadLineTimeText />
          </S.JoinDeadLineTimeText>
        </S.TitleContainer>
        <S.JoinPageSectionContentContainer>
          <S.HanseithonJoinContainer>
            <S.HanseithonTitleText>hanseithon : o</S.HanseithonTitleText>
            <S.HanseithonDescriptionText>
              2022년 제 5회 한세톤이 다시 <strong>오프라인</strong>으로
              돌아왔습니다. 한세톤 참가
              <br />
              신청 방법은 팀장이 팀 생성을 진행하시면 됩니다. <br />
              팀명은 0자로 제한되며 부적절한 팀명은 자제해주시면 감사하겠습니다.
              또한 <br /> 팀원들은 팀장이 팀 생성 시 제공되는 참가코드를
              입력하여 참가해주시면 됩니다.
            </S.HanseithonDescriptionText>
            <S.HanseithonDateText>
              <strong>참가 신청</strong> : 7월 11일 15시부터
              <br />
              <strong>참가 신청 마감</strong> : 7월 14일 00시까지
            </S.HanseithonDateText>
          </S.HanseithonJoinContainer>
          <S.ButtonContainer>
            <Button
              variant="contained"
              onClick={
                user?.result.team
                  ? handleOnClickShowTeamInfo
                  : handleOnClickCreateTeam
              }
            >
              {user?.result.team ? "초대코드 확인하기" : "팀 생성하기"}
            </Button>
            {/* {!user?.result.team && ( */}
            <Button variant="outlined" onClick={handleOnClickJoinTeam}>
              팀 참가하기
            </Button>
            {/* )} */}
          </S.ButtonContainer>
        </S.JoinPageSectionContentContainer>
      </section>
    </DefaultLayout>
  );
};
