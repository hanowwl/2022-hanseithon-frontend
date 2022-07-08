import React from "react";

import * as S from "./styled";

export interface ModalInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const ModalInput: React.FC<ModalInputProps> = ({ label, ...props }) => (
  <div>
    <S.ModalInputLabel>{label}</S.ModalInputLabel>
    <S.StyledTextField {...props} />
  </div>
);
