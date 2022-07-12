import styled from "@emotion/styled";

import LandingBackground from "src/assets/png/hackathon-landing-background.png";
import LandingPoster from "src/assets/png/hackathon-landing-poster.png";
import LandingPoster2PNG from "src/assets/png/hackathon-landing-poster2.png";
import { Device } from "src/constants";

export const HackathonMainPageContainer = styled.div`
  width: 100%;
`;

export const HackathonMainPagePNGWrapper = styled.div`
  width: 100%;
  margin-top: 5rem;
`;

export const HackathonMainPagePosterPNG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${LandingPoster}) no-repeat;
  background-size: contain;
  width: 100%;
  height: 90vh;
  user-select: none;
  @media ${Device.tabletL} {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`;

export const HackathonMainPagePoster2PNG = styled.div`
  width: 44rem;
  height: 63rem;
  background: url(${LandingPoster2PNG}) no-repeat;
  background-size: contain;
  @media ${Device.laptop} {
    display: none;
  }
`;

export const HackathonMainPageTitle = styled.div`
  font-size: 7.8rem;
  text-align: center;
  letter-spacing: -0.15rem;
  font-family: "Spectral SC", serif;
  user-select: none;
  margin-bottom: 10rem;
  @media ${Device.tabletL} {
    margin: 14rem 0;
    font-size: 4.7rem;
  }
`;

export const HackathonMainPageBackground = styled.div`
  background: url(${LandingBackground}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  user-select: none;
  margin-top: 12rem;
  @media ${Device.tabletL} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: none;
    margin: 11rem 0;
  }
`;

export const HackathonPageContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HackathonMainPageTextWrapper = styled.div`
  margin-right: 18rem;
  @media ${Device.tabletL} {
    margin-left: 18.5rem;
  }
`;

export const HackathonMainPageBannerText = styled.div`
  font-size: 5.5rem;
  font-weight: 600;
  font-family: "Spectral SC", sans-serif;
  letter-spacing: -0.1rem;
  @media ${Device.tabletL} {
    font-size: 2.9rem;
  }
`;

export const HackathonMainPageDescriptionText = styled.div`
  font-size: 2rem;
  font-weight: 300;
  line-height: 3.8rem;
  margin-top: 0.8rem;
  @media ${Device.tabletL} {
    font-size: 1.5rem;
    line-height: 2rem;
    word-break: break-all;
  }
`;

export const HanseithonDateText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 3rem;
  margin-top: 2.5rem;
`;

export const HackathonMainPageButtonContainer = styled.div`
  display: flex;
  margin-top: 6rem;
`;

export const HackathonMainPageButtonWrapper = styled.div`
  margin-right: 4rem;
  line-height: 4rem;
  @media ${Device.tabletL} {
    margin-right: 1rem;
  }
`;

export const HanseithonCompetitionInfo = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  user-select: none;
`;

export const HanseithonCompetitionInfoButton = styled.button`
  font-size: 1.6rem;
  font-weight: 600;
  width: 17.5rem;
  height: 4.9rem;
  border-radius: 7px;
  background-color: #ffffff;
  color: #18181a;
  cursor: pointer;
  color: black;
  border: none;
`;
