/* eslint-disable no-shadow */
import React from "react";
import { Link } from "react-router-dom";

import ArrowRightSVG from "src/assets/svg/arrow-right.svg";

import * as S from "./styled";

export interface AuthLayoutProps {
  title: string;
  src?: string;
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  src,
  children,
}) => {
  const indentTitle = title.split("/");
  return (
    <S.AuthLayoutContainer>
      {src && (
        <Link to={src}>
          <ArrowRightSVG />
        </Link>
      )}
      <div style={{ marginTop: "2rem" }}>
        {indentTitle ? (
          indentTitle.map((title) => <h1>{title}</h1>)
        ) : (
          <h1>{title}</h1>
        )}
      </div>
      <S.AuthLayoutChildrenWrapper>{children}</S.AuthLayoutChildrenWrapper>
    </S.AuthLayoutContainer>
  );
};
