import React from "react";

import * as S from "./styled";

export interface ModalSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export const ModalSelect = React.forwardRef<
  HTMLSelectElement,
  ModalSelectProps
>(({ label, ...props }, ref) => (
  <div>
    <S.ModalInputLabel>{label}</S.ModalInputLabel>
    <S.StyledSelectField ref={ref} {...props} />
  </div>
));
