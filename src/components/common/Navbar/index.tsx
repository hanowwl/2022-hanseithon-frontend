/* eslint-disable no-nested-ternary */
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { APIResponse } from "src/api";
import { UserProfileResponse } from "src/api/user";
import LogoTempSVG from "src/assets/svg/logo-temp.svg";
import { navbarMenu } from "src/constants";
import { useLogout } from "src/hook/query";

import * as S from "./styled";

export interface NavbarProps {
  alignMenuCenter?: boolean;
  userInfo?: APIResponse<UserProfileResponse>;
  fetch?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  userInfo,
  fetch,
  alignMenuCenter = false,
}) => {
  const navigate = useNavigate();
  const { deleteUserInformation } = useLogout();

  const handleLogoutButtonClick = useCallback(
    () => deleteUserInformation(),
    [deleteUserInformation],
  );

  return (
    <S.NavbarContainer alignMenuCenter={alignMenuCenter}>
      <S.LogoWrapper>
        <LogoTempSVG />
      </S.LogoWrapper>
      <S.NavbarMenuListContainer alignMenuCenter={alignMenuCenter}>
        <S.NavbarMenuList>
          {navbarMenu.map((v) => (
            <S.StyledLink key={v.to} to={v.to} end>
              {v.text}
            </S.StyledLink>
          ))}
        </S.NavbarMenuList>
        {fetch ? null : userInfo?.status === "SUCCESS" ? (
          <S.NavLoginButton
            onClick={handleLogoutButtonClick}
            variant="contained"
          >
            로그아웃
          </S.NavLoginButton>
        ) : (
          <S.NavLoginButton
            onClick={() => navigate("/auth/login")}
            variant="contained"
          >
            로그인
          </S.NavLoginButton>
        )}
      </S.NavbarMenuListContainer>
    </S.NavbarContainer>
  );
};
