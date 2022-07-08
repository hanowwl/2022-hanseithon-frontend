import React, { InputHTMLAttributes } from "react";

import ImportantSVG from "src/assets/svg/important.svg";
import { TextField } from "src/components";

import * as S from "./styled";

interface AuthLabelTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  importance?: boolean;
}

export const AuthLabelTextField = React.forwardRef<
  HTMLInputElement,
  AuthLabelTextFieldProps
>(({ importance = false, className, ...options }, ref) => (
  <S.AuthLabelTextFieldContainer>
    {className && (
      <S.AuthLabelTextFieldTextContainer>
        <span>{className}</span>
        {importance && <ImportantSVG />}
      </S.AuthLabelTextFieldTextContainer>
    )}
    <TextField ref={ref} {...options} />
  </S.AuthLabelTextFieldContainer>
));
