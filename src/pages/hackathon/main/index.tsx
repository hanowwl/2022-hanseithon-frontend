import React from "react";

import HackathonMainBannerPNG from "src/assets/png/hackathon-main-banner.png";
import { HackerProfileCard, Navbar } from "src/components";
import { TeamActivityLog } from "src/components/hackathon/TeamActivityLog";
import { TeamInfoCard } from "src/components/hackathon/TeamInfoCard";

import * as S from "./styled";

export const HackathonMainPage: React.FC = () => {
  const hackerProfiles = [
    {
      name: "최민기",
      position: "없음",
      department: "@해킹",
    },
    {
      name: "최민기",
      position: "없음",
      department: "@해킹",
    },
    {
      name: "최민기",
      position: "없음",
      department: "@해킹",
    },
    {
      name: "최민기",
      position: "없음",
      department: "@해킹",
    },
    {
      name: "최민기",
      position: "없음",
      department: "@해킹",
    },
    {
      name: "최민기",
      position: "없음",
      department: "@해킹",
    },
    {
      name: "최민기",
      position: "없음",
      department: "@해킹",
    },
  ];

  const UserTeamLog = [
    {
      name: "최민기",
      position: "없음",
      department: "@해킹",
      action: "produce",
      team: {
        name: "병주고 약주고",
        type: "생활",
        description: "안녕! 클레오파트라! 세상에서 가장멋진 포테이토 칩",
        owner: "최민기",
        members: ["최민기", "최민기", "최민기"],
      },
    },
    {
      name: "최민기",
      position: "없음",
      department: "@해킹",
      action: "produce",
      team: {
        name: "병주고 약주고",
        type: "생활",
        description: "안녕! 클레오파트라! 세상에서 가장멋진 포테이토 칩",
        owner: "최민기",
        members: ["최민기", "최민기", "최민기"],
      },
    },
    {
      name: "최민기ss",
      position: "없음",
      department: "@해킹",
      action: "submission",
      team: {
        name: "병주고 약주고",
        type: "파일 제출",
        description: "안녕! 클레오파트라! 세상에서 가장멋진 포테이토 칩",
        owner: "최민기",
        members: ["최민기", "최민기", "최민기"],
      },
    },
  ];

  return (
    <S.HackathonMainPageContainer>
      <Navbar />
      <S.HackathonMainPageBannerImage src={HackathonMainBannerPNG} />
      <section style={{ marginBottom: "4.9rem" }}>
        <S.SectionTitleContainer style={{ marginBottom: "1.9rem" }}>
          <S.NewJoinedMakerTitle>새로 참가한 해커 🧑‍💻</S.NewJoinedMakerTitle>
          <S.StyledLink to="">전체</S.StyledLink>
        </S.SectionTitleContainer>
        <S.HackerProfileCardsListWrapper>
          <S.HackerProfileCardsListContainer>
            {hackerProfiles.map((profile, i) => (
              <HackerProfileCard
                key={profile.name + i.toString()}
                {...profile}
              />
            ))}
          </S.HackerProfileCardsListContainer>
        </S.HackerProfileCardsListWrapper>
      </section>
      <section>
        <S.SectionTitleContainer>
          <S.SectionTitle>전체 😁</S.SectionTitle>
          <S.LastUpdateButton variant="contained">전체</S.LastUpdateButton>
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
              <S.HackathonPageNavbarLink to="/hackathon/team">
                팀빌딩
              </S.HackathonPageNavbarLink>
            </li>
          </S.HackathonPageNavbarList>
        </S.HackathonPageNavbar>
        <div>
          {UserTeamLog.map((v, i) => (
            <div>
              <TeamActivityLog key={v.name + i.toString()} {...v} />
              {v.team && (
                <TeamInfoCard key={v.name + i.toString()} {...v.team} />
              )}
            </div>
          ))}
        </div>
      </section>
    </S.HackathonMainPageContainer>
  );
};
