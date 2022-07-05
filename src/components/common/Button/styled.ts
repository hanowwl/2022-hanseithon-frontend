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
  letter-spacing: -0.01rem;
  padding: 1rem;
  transition: all 200ms;

  ${(props) => {
    switch (props.variant) {
      case "contained":
        return css`
          color: var(--color-text-primary);
          background-color: var(--color-primary);
          cursor: pointer;

          &:hover {
            background-color: var(--color-primary-darker);
          }

          &:disabled {
            background-color: var(--color-primary-disabled);
            cursor: not-allowed;
          }
        `;

      case "outlined":
        return css`
          color: var(--color-primary);
          background-color: transparent;
          border: 1px solid var(--color-primary);

          &:hover {
            color: var(--color-primary-darker);
            border-color: var(--color-primary-darker);
          }
        `;

      default:
        return css`
          color: var(--color-text-primary);
          background-color: var(--color-primary);
        `;
    }
  }}
`;
