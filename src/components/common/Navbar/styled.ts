import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { Button } from "../Button";

export const NavbarContainer = styled.header<{ alignMenuCenter: boolean }>`
  width: 100%;
  height: 7rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (props.alignMenuCenter ? "0 3.5rem" : "0")};
`;

export const LogoWrapper = styled.div`
  flex: 1 1 auto;
`;

export const NavbarMenuListContainer = styled.nav<{ alignMenuCenter: boolean }>`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.alignMenuCenter ? "space-between" : "flex-end"};
`;

export const NavbarMenuList = styled.ul`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  all: unset;
  font-size: 1.4rem;
  font-weight: 300;
  padding: 0.8rem 1.3rem;
  border-radius: 0.5rem;
  transition: background 250ms;
  cursor: pointer;

  &.active {
    color: var(--color-primary);
    font-weight: 400;
  }

  &:hover {
    background-color: rgba(24, 24, 24, 0.67);
  }
`;

export const NavLoginButton = styled(Button)`
  width: fit-content !important;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.6rem 1rem;
  margin-left: 1rem;
  background-color: var(--color-primary);
`;
