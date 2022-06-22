import { css } from "@emotion/react";
import styled from "@emotion/styled";

import CircleCheckSVG from "src/assets/svg/CircleCheck.svg";

export const CircleCheck = styled(CircleCheckSVG)<{ checked: boolean }>`
  cursor: pointer;
  border: 2px solid #959595;
  border-radius: 1rem;
  width: 1.3rem;
  height: 1.3rem;
  display: block;
  ${({ checked }) =>
    checked &&
    css`
      border: 2px solid red;
      path {
        fill: red;
      }
    `}
`;

export const NoneCheckBox = styled.input`
  display: none;
`;
