import React from "react";

import { Navbar } from "src/components/common";
import { useFetchUser } from "src/hook/query";

import * as S from "./styled";

export interface DefaultLayoutProps {
  children: React.ReactNode;
  conversion?: boolean;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  conversion,
}) => {
  const { data: user, isFetching } = useFetchUser();

  return (
    <>
      <Navbar userInfo={user} fetch={isFetching} alignMenuCenter />
      <S.DefaultLayoutContainer dimensions={conversion}>
        {children}
      </S.DefaultLayoutContainer>
    </>
  );
};
