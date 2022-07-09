import React from "react";

import * as S from "./styled";

export interface ModalInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const ModalInput = React.forwardRef<HTMLInputElement, ModalInputProps>(
  ({ label, ...props }, ref) => (
    <div>
      <S.ModalInputLabel>{label}</S.ModalInputLabel>
      <S.StyledTextField ref={ref} {...props} />
    </div>
  ),
);
