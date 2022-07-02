import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ButtonVariantType } from ".";

export const ButtonElement = styled.button<{
  variant: ButtonVariantType;
}>`
  border: none;
  outline: none;
  width: 100%;
  border-radius: 0.7rem;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.2rem;
  padding: 1rem;

  ${(props) => {
    switch (props.variant) {
      case "contained":
        return css`
          color: var(--color-text-primary);
          background-color: var(--color-primary);
        `;

      case "outlined":
        return css`
          color: var(--color-primary);
          background-color: transparent;
          border: 1px solid var(--color-primary);
        `;

      default:
        return css`
          color: var(--color-text-primary);
          background-color: var(--color-primary);
        `;
    }
  }}
`;
