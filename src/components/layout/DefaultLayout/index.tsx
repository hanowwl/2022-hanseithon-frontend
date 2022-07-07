import React from "react";

import { Navbar } from "src/components/common";

import * as S from "./styled";

export interface DefaultLayoutProps {
  children: React.ReactNode;
  conversion?: boolean;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  conversion,
}) => (
  <>
    <Navbar alignMenuCenter />
    <S.DefaultLayoutContainer dimensions={conversion}>
      {children}
    </S.DefaultLayoutContainer>
  </>
);
