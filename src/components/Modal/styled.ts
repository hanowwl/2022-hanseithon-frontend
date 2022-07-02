import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
`;

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
