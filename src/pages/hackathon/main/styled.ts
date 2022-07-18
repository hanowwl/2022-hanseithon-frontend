import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import HackathonMainBannerPNG from "src/assets/png/hackathon-main-banner.png";
import { Button } from "src/components";

export const HackathonMainPageContainer = styled.div`
  width: 100%;
  max-width: 770px;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 7rem;
`;

export const HackathonMainPageBannerImage = styled.div`
  width: auto;
  height: 35rem;
  max-height: 100%;
  max-width: 100%;
  user-select: none;
  margin-top: 3.5rem;
  margin-bottom: 4.5rem;
  border-radius: 1rem;
  transition: all 250ms;
  object-fit: contain;
  background: url(${HackathonMainBannerPNG}) no-repeat;
  background-size: cover;
  & > div {
    display: none;
  }

  :hover {
    opacity: 0.8;
    & > div {
      display: block;
      transition: all 250ms;
      display: flex;
      color: var(--color-text-primary);
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
    }
  }
`;

export const SectionTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTitle = styled.p`
  font-size: 2.3rem;
  font-weight: 700;
  margin: 0;
`;

export const NewJoinedMakerTitle = styled(SectionTitle)`
  font-size: 1.8rem;
`;

export const HackerProfileCardsListWrapper = styled.div`
  flex: 1;
  display: flex;
  overflow: auto;
  ::-webkit-scrollbar {
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--color-primary-gray);
    border-radius: 10px;
  }
`;

export const HackerProfileCardsListContainer = styled.div`
  display: flex;
  min-width: min-content;

  & > div:not(:last-child) {
    margin-right: 1.2rem;
  }
`;

export const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 300;
`;

export const LastUpdateButton = styled(Button)`
  width: fit-content;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: -0.055rem;
  padding: 0.3rem 0.7rem;
  border-radius: 0.6rem;
  background-color: #242424;

  &:hover {
    background-color: #242424;
  }
`;

export const HackathonPageNavbar = styled.nav`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #434343;
`;

export const HackathonPageNavbarList = styled.ul`
  height: fit-content;
  display: flex;
  flex: 1 1 auto;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;

  li {
    display: flex;
    float: left;
  }
`;

export const HackathonPageNavbarLink = styled(Link)`
  all: unset;
  cursor: pointer;
  color: #939393;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.5rem 0;

  &:hover {
    color: #c6c6c9;
  }

  &.active {
    color: var(--text-primary);
    border-bottom: 2px solid white;
    z-index: 10;
  }
`;
