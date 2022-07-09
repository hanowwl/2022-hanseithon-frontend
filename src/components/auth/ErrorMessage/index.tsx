import React from "react";

import * as S from "./styled";

export interface ErrorMessageProps {
  error?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <S.ErrorMessageElement>{error}</S.ErrorMessageElement>
);
