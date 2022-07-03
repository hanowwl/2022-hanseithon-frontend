import React from "react";

import { Navbar } from "src/components/common";

import * as S from "./styled";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => (
  <>
    <Navbar alignMenuCenter />
    <S.DefaultLayoutContainer>{children}</S.DefaultLayoutContainer>
  </>
);
