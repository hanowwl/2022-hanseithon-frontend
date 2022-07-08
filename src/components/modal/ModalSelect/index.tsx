import React from "react";

import * as S from "./styled";

export interface ModalSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export const ModalSelect: React.FC<ModalSelectProps> = ({
  label,
  ...props
}) => (
  <div>
    <S.ModalInputLabel>{label}</S.ModalInputLabel>
    <S.StyledSelectField {...props} />
  </div>
);
