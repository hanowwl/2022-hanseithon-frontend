import React, { SelectHTMLAttributes } from "react";

import * as S from "./styled";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const SelectField = React.forwardRef<
  HTMLSelectElement,
  SelectFieldProps
>(({ ...options }, ref) => (
  <S.SelectElementWrapper>
    <S.SelectElement ref={ref} {...options} />
  </S.SelectElementWrapper>
));
