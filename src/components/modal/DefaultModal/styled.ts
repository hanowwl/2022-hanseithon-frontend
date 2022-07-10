import styled from "@emotion/styled";

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
    min-width: 0;
    max-width: none;
    padding: 2.5rem;
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

export const ModalContentWrapper = styled.div`
  font-size: 1.7rem;
  font-weight: 300;
`;

export const ModalControlsContainer = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
