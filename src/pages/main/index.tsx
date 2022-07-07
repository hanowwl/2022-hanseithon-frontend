import React from "react";

import LandingBackground from "src/assets/png/hackathon-landing-background.png";
import LandingPoster1PNG from "src/assets/png/hackathon-landing-poster1.png";
import LandingPoster2PNG from "src/assets/png/hackathon-landing-poster2.png";
import LandingPoster3PNG from "src/assets/png/hackathon-landing-poster3.png";
import LandingPoster4PNG from "src/assets/png/hackathon-landing-poster4.png";
import { DefaultLayout } from "src/components";

import * as S from "./styled";

export const MainPage: React.FC = () => (
  <DefaultLayout conversion>
    <S.HackathonMainPageContainer>
      <S.HackathonMainPageTitle>
        WELCOME TO HANSEITHON:O
      </S.HackathonMainPageTitle>
      <S.HackathonMainPagePNGWrapper>
        <S.HackathonMainPagePosterPNG src={LandingPoster1PNG} />
        <S.HackathonMainPagePosterPNG src={LandingPoster2PNG} />
        <S.HackathonMainPagePosterPNG src={LandingPoster3PNG} />
        <S.HackathonMainPagePosterPNG src={LandingPoster4PNG} />
      </S.HackathonMainPagePNGWrapper>
      <S.HackathonMainPageContentContainer>
        <S.HackathonMainPageBackground src={LandingBackground} />
        <S.HackathonMainPageTextWrapper>
          <S.HackathonMainPageTitleText>
            정답의 눈, 한세톤 : O
          </S.HackathonMainPageTitleText>
          <S.HackathonMainPageBannerText>
            HANSEITHON : O
          </S.HackathonMainPageBannerText>
          <S.HackathonMainPageDescriptionText>
            안녕하세요, 한세사이버보안고등학교 학생회 주관 ‘한세톤 : O’의 신청
            페이지입니다.
            <br />
            한세톤의 참가부터 운영까지 모든 것이 이 페이지에서 이루어질
            예정입니다.
            <br />
            개발에 정답은 없습니다. 이곳에서 팀원과 함께 자신이 원하는 대로 길을
            개척해나가세요.
            <br />
            한세톤:O에 참가하여 개발을 통해 여러분의 꿈을 세상에 보여주세요.
          </S.HackathonMainPageDescriptionText>
          <S.HanseithonDateText>
            <strong>참가 신청</strong> : 7월 11일 00시 - 7월 15일 23시 59분
            <br />
            <strong>참가 신청 마감</strong> : 7월 11일 00시 - 7월 15일 23시 59분
          </S.HanseithonDateText>
          <S.HackathonMainPageButtonContainer>
            <S.HackathonMainPageButtonWrapper>
              <S.HanseithonCompetitionInfo>
                심사 기준표 {">"}
              </S.HanseithonCompetitionInfo>
              <S.HanseithonCompetitionInfoButton>
                현황
              </S.HanseithonCompetitionInfoButton>
            </S.HackathonMainPageButtonWrapper>
            <S.HackathonMainPageButtonWrapper>
              <S.HanseithonCompetitionInfo>
                주제 공개 {">"}
              </S.HanseithonCompetitionInfo>
              <S.HanseithonCompetitionInfoButton>
                지금 보러가기
              </S.HanseithonCompetitionInfoButton>
            </S.HackathonMainPageButtonWrapper>
          </S.HackathonMainPageButtonContainer>
        </S.HackathonMainPageTextWrapper>
      </S.HackathonMainPageContentContainer>
    </S.HackathonMainPageContainer>
  </DefaultLayout>
);
