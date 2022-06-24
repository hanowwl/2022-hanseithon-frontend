import React from "react";

import { useFetchUser } from "src/hook/query";

export const MainPage: React.FC = () => {
  const { data: user, isFetching } = useFetchUser();

  return <div>{!isFetching && user?.result.name}님 안녕하세요</div>;
};
