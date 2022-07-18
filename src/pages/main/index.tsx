import React from "react";
import { useMediaQuery } from "react-responsive";

import { DefaultLayout } from "src/components";
import { useModal } from "src/hook";

import { Competition } from "./competition";
import * as S from "./styled";
import { TimeTable } from "./timetable";

export const MainPage: React.FC = () => {
  const { addModal, removeCurrentModal } = useModal();

  const isMobile = useMediaQuery({
    query: "(max-width:425px)",
  });

  const addTimeTableModal = () =>
    addModal({
      type: "default",
      props: {
        type: "ALERT",
        title: "타임테이블",
        content: <TimeTable />,
        button: {
          text: "닫기",
          variant: "outlined",
        },
        handleOnConfirm: () => removeCurrentModal(),
        width: "53rem",
      },
    });

  const addCompetitionModal = () => {
    addModal({
      type: "default",
      props: {
        type: "ALERT",
        title: "심사기준",
        content: <Competition />,
        button: {
          text: "닫기",
          variant: "outlined",
        },
        handleOnConfirm: () => removeCurrentModal(),
        width: "60rem",
      },
    });
  };

  return (
    <DefaultLayout conversion>
      <S.HackathonMainPageContainer>
        <S.HackathonMainPagePNGWrapper>
          <S.HackathonMainPagePosterPNG>
            <S.HackathonMainPageTitle>
              WELCOME TO HANSEITHON:O
            </S.HackathonMainPageTitle>
          </S.HackathonMainPagePosterPNG>
        </S.HackathonMainPagePNGWrapper>

        <S.HackathonMainPageBackground>
          <S.HackathonPageContentWrapper>
            <S.HackathonMainPageTextWrapper>
              <S.HackathonMainPageBannerText>
                HANSEITHON : O
              </S.HackathonMainPageBannerText>
              {isMobile ? (
                <S.HackathonMainPageDescriptionText>
                  안녕하세요, 한세사이버보안고등학교 학생회 주관 <br />
                  ‘한세톤 : O’의 웹사이트입니다.
                  <br />
                  한세톤의 참가부터 운영까지 모든 것이 이 웹사이트에서 <br />
                  이루어질 예정입니다.
                  <br />
                  개발에 정답은 없습니다. 이곳에서 팀원과 함께 자신이 <br />
                  원하는 대로 길을 개척해나가세요.
                  <br />
                  한세톤:O에 참가하여 개발을 통해 여러분의 꿈을 세상에
                  <br />
                  보여주세요.
                </S.HackathonMainPageDescriptionText>
              ) : (
                <S.HackathonMainPageDescriptionText>
                  안녕하세요, 한세사이버보안고등학교 학생회 주관 ‘한세톤 : O’의
                  웹사이트입니다.
                  <br />
                  한세톤의 참가부터 운영까지 모든 것이 이 웹사이트에서 이루어질
                  예정입니다.
                  <br />
                  개발에 정답은 없습니다. 이곳에서 팀원과 함께 자신이 원하는
                  대로 길을 개척해나가세요.
                  <br />
                  한세톤:O에 참가하여 개발을 통해 여러분의 꿈을 세상에
                  보여주세요.
                </S.HackathonMainPageDescriptionText>
              )}

              <S.HanseithonDateText>
                <strong>참가 신청</strong> : 7월 11일 15시부터
                <br />
                <strong>참가 신청 마감</strong> : 7월 14일 23시 59분 까지
              </S.HanseithonDateText>
              <S.HackathonMainPageButtonContainer>
                <S.HackathonMainPageButtonWrapper>
                  <S.HanseithonCompetitionInfo>
                    심사 기준표 {">"}
                  </S.HanseithonCompetitionInfo>
                  <S.HanseithonCompetitionInfoButton
                    onClick={addCompetitionModal}
                  >
                    확인하기
                  </S.HanseithonCompetitionInfoButton>
                </S.HackathonMainPageButtonWrapper>
                <S.HackathonMainPageButtonWrapper>
                  <S.HanseithonCompetitionInfo>
                    타임 테이블 {">"}
                  </S.HanseithonCompetitionInfo>
                  <S.HanseithonCompetitionInfoButton
                    onClick={addTimeTableModal}
                  >
                    확인하기
                  </S.HanseithonCompetitionInfoButton>
                </S.HackathonMainPageButtonWrapper>
              </S.HackathonMainPageButtonContainer>
            </S.HackathonMainPageTextWrapper>
            <S.HackathonMainPagePoster2PNG />
          </S.HackathonPageContentWrapper>
        </S.HackathonMainPageBackground>
      </S.HackathonMainPageContainer>
    </DefaultLayout>
  );
};
