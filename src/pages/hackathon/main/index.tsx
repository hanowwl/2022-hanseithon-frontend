import React from "react";
import YouTube from "react-youtube";

import { Button, HackerProfileCard, Navbar } from "src/components";
import { TeamActivityLog } from "src/components/hackathon/TeamActivityLog";
import { TeamInfoCard } from "src/components/hackathon/TeamInfoCard";
import { useModal } from "src/hook";
import { useFetchAllUser, useFetchUser } from "src/hook/query";

import * as S from "./styled";

export const HackathonMainPage: React.FC = () => {
  const { data: user, isFetching } = useFetchUser();
  const { data: hackerProfiles } = useFetchAllUser();
  const { addModal, removeCurrentModal } = useModal();

  const addRequireLoginModal = () => {
    addModal({
      type: "team",
      props: {
        width: "80rem",
        title: "주제공개 영상 보기",
        description: "영상 공개는 7월 20일 오후 4시 정각에 진행될 예정이에요!",
        content: (
          <YouTube
            videoId="EqC5AQLqcr8"
            style={{ marginBottom: "2rem" }}
            opts={{
              width: "100%",
              height: "315",
              playerVars: {
                autoplay: 1,
                rel: 0,
                modestbranding: 1,
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
        ),
        closeButton: {
          text: "취소하기",
        },
        submitButton: {
          text: "보러가기",
        },
        handleOnSubmit: () => {
          window.open("https://www.youtube.com/watch?v=6S0IAKzcYX8", "_blank");
        },
        handleOnClose: () => removeCurrentModal(),
      },
    });
  };
  return (
    <S.HackathonMainPageContainer>
      <Navbar userInfo={user} fetch={isFetching} />
      <S.HackathonMainPageBannerImage>
        <div>
          <h1>주제공개 영상을 보시겠습니까? </h1>
          <Button
            onClick={addRequireLoginModal}
            variant="outlined"
            style={{ width: "50%" }}
          >
            지금 영상보기
          </Button>
        </div>
      </S.HackathonMainPageBannerImage>

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
