import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { Device } from "src/constants";

import { Button } from "../Button";

export const NavbarContainer = styled.header<{ alignMenuCenter: boolean }>`
  width: 100%;
  height: 7rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (props.alignMenuCenter ? "0 3.5rem" : "0")};
  @media ${Device.tabletL} {
    padding: ${(props) => (props.alignMenuCenter ? "0 1.5rem" : "0")};
  }
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

export const StyledNonLink = styled.div<{ tooltip?: string }>`
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

  ${(props) =>
    props.tooltip &&
    css`
      position: relative;
      :before,
      :after {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        transition: all 0.2s ease;
        font-size: 11px;
        letter-spacing: -1px;
      }
      :before {
        content: attr(data-tooltip);
        height: 13px;
        position: absolute;
        bottom: -20px;
        padding: 5px 10px 7px;
        border-radius: 5px;
        color: #fff;
        background: var(--color-primary);
        font-family: "Spoqa Han Sans Neo", sans-serif;
      }
      :after {
        content: "";
        border-left: 5px solid transparent;
        bottom: 2px;
        border-right: 5px solid transparent;
        border-bottom: 5px solid var(--color-primary);
      }
      :not([data-tooltip=""]):hover:before {
        visibility: visible;
        opacity: 1;
        bottom: -30px;
      }
      :not([data-tooltip=""]):hover:after {
        visibility: visible;
        opacity: 1;
        bottom: -8px;
      }
    `}
`;

export const NavLoginButton = styled(Button)`
  width: fit-content !important;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.6rem 1rem;
  margin-left: 1rem;
  background-color: var(--color-primary);
`;

export const NavbarDrawerMenuBar = styled.button<{ status: boolean }>`
  outline: none;
  border: none;
  background: none;
  margin: 0px;
  padding: 0px;
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  place-items: center;
  cursor: pointer;

  & > span {
    position: relative;
    display: block;
    width: 20px;
    height: 2px;
    transition: all 0.25s ease-in-out 0s;
    transform: rotate(0deg);
    opacity: 1;
    border-radius: 9px;
    background: white;
  }

  & > span:nth-child(1) {
    top: calc(50% - 10px);
    ${(props) =>
      props.status &&
      css`
        top: 50%;
        transform: rotate(135deg);
      `}
  }

  & > span:nth-child(2) {
    top: calc(50% - 5px);
    ${(props) =>
      props.status &&
      css`
        opacity: 0;
        transition: all 0.1s ease 0s;
        transform: translateX(-50px);
      `}
  }

  & > span:nth-child(3) {
    top: 50%;
    ${(props) =>
      props.status &&
      css`
        top: calc(50% - 4px);
        transform: rotate(-135deg);
      `}
  }
`;

export const NavbarDrawerMenuListContainer = styled.div<{
  size: boolean;
  status: boolean;
}>`
  width: 100%;
  top: calc(100% + 10px);
  position: absolute;
  display: flex;
  right: 0;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: black;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 5px;
  opacity: ${(props) => (props.size && props.status ? 1 : 0)};
  transition: all 0.2s ease 0s;
`;

export const NavDrawerLoginButton = styled.button`
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
