import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Button } from "src/components/common";
import { Device } from "src/constants";

export const ModalWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const ModalContainer = styled.div<{ width?: string | number }>`
  box-sizing: border-box;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: ${(props) => props.width || "40rem"};
  min-width: 40rem;
  max-width: 53rem;
  margin: 0 auto;
  padding: 4rem;
  border-radius: 0.7rem;
  background-color: var(--modal-background);
  animation: modal_fade_in 300ms;

  @media ${Device.tabletS} {
    width: 100%;
    height: 100%;
    min-width: none;
    max-width: none;
  }

  @keyframes modal_fade_in {
    from {
      opacity: 0;
      margin-top: -5rem;
    }

    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

export const ModalControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const TeamModalTitle = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin: 0 0 0.7rem 0;
  letter-spacing: -0.1rem;
`;

export const TeamModalDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.05rem;
  text-align: center;
  margin: 0 0 1.7rem 0;
`;

export const TeamModalButton = styled(Button)<{
  isCloseButton?: boolean;
  noCloseButton?: boolean;
}>`
  font-size: 1.5rem;
  font-weight: 400;
  max-width: 16rem;

  padding-top: 1.2rem;
  padding-bottom: 1.2rem;

  ${(props) =>
    props.isCloseButton &&
    css`
      color: var(--text-primary);
      border: none;

      &:hover {
        color: var(--text-primary);
        background-color: #232326;
      }
    `}

  ${(props) =>
    props.noCloseButton &&
    css`
      max-width: unset;
    `}
`;
