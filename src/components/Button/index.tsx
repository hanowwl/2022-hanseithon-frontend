import React from "react";

import * as S from "./styled";

export type ButtonVariantType = "contained" | "outlined";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariantType;
}

export const Button: React.FC<ButtonProps> = ({ ...props }) => (
  <S.ButtonElement {...props} />
);
