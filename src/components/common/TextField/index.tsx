import React, { InputHTMLAttributes } from "react";

import * as S from "./styled";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...options }, ref) => <S.InputElement ref={ref} {...options} />,
);
