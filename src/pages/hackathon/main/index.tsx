import React from "react";

import HackathonMainBannerPNG from "src/assets/png/hackathon-main-banner.png";
import { HackerProfileCard, Navbar } from "src/components";
import { TeamActivityLog } from "src/components/hackathon/TeamActivityLog";
import { TeamInfoCard } from "src/components/hackathon/TeamInfoCard";
import { useFetchAllUser, useFetchUser } from "src/hook/query";

import * as S from "./styled";

export const HackathonMainPage: React.FC = () => {
  const { data: user, isFetching } = useFetchUser();
  const { data: hackerProfiles } = useFetchAllUser();

  return (
    <S.HackathonMainPageContainer>
      <Navbar userInfo={user} fetch={isFetching} />
      <S.HackathonMainPageBannerImage src={HackathonMainBannerPNG} />
      <section style={{ marginBottom: "4.9rem" }}>
        <S.SectionTitleContainer style={{ marginBottom: "1.9rem" }}>
          <S.NewJoinedMakerTitle>새로 참가한 해커 🧑‍💻</S.NewJoinedMakerTitle>
          <S.StyledLink to="">전체</S.StyledLink>
        </S.SectionTitleContainer>
        <S.HackerProfileCardsListWrapper>
          <S.HackerProfileCardsListContainer>
            {hackerProfiles?.result.map((profile, i) => (
              <HackerProfileCard
                key={profile.user.name + i.toString()}
                {...profile.user}
              />
            ))}
          </S.HackerProfileCardsListContainer>
        </S.HackerProfileCardsListWrapper>
      </section>
      <section>
        <S.SectionTitleContainer>
          <S.SectionTitle>전체 😁</S.SectionTitle>
          <S.LastUpdateButton variant="contained">최근</S.LastUpdateButton>
        </S.SectionTitleContainer>
        <S.HackathonPageNavbar>
          <S.HackathonPageNavbarList>
            <li>
              <S.HackathonPageNavbarLink to="" className="active">
                전체
              </S.HackathonPageNavbarLink>
            </li>
            <li>
              <S.HackathonPageNavbarLink to="">
                파일제출
              </S.HackathonPageNavbarLink>
            </li>
            <li>
              <S.HackathonPageNavbarLink to="">
                팀빌딩
              </S.HackathonPageNavbarLink>
            </li>
          </S.HackathonPageNavbarList>
        </S.HackathonPageNavbar>
        <div>
          {hackerProfiles?.result.map((v, i) => (
            <div>
              <TeamActivityLog key={v.team.name + i.toString()} {...v} />
              {v.team.name && (
                <TeamInfoCard key={v.team.name + i.toString()} {...v.team} />
              )}
            </div>
          ))}
        </div>
      </section>
    </S.HackathonMainPageContainer>
  );
};
