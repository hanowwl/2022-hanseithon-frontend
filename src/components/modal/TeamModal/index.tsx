import React from "react";

import * as S from "./styled";

export interface TeamModalProps {
  title: string;
  description: string;
  content: React.ReactNode;
  submitButton: {
    text: string;
  };
  closeButton?: {
    text: string;
  };
  width?: string | number;
  handleOnSubmit: () => void;
  handleOnClose?: () => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({
  width,
  title,
  description,
  content,
  closeButton,
  submitButton,
  handleOnSubmit,
  handleOnClose,
}) => (
  <S.ModalWrapper>
    <S.ModalContainer width={width}>
      <S.TeamModalTitle>{title}</S.TeamModalTitle>
      <S.TeamModalDescription>{description}</S.TeamModalDescription>
      <div>{content}</div>
      <S.ModalControlsContainer>
        {closeButton && (
          <S.TeamModalButton
            variant="outlined"
            onClick={handleOnClose}
            isCloseButton
          >
            {closeButton.text}
          </S.TeamModalButton>
        )}
        <S.TeamModalButton
          variant="contained"
          onClick={handleOnSubmit}
          noCloseButton={!closeButton}
        >
          {submitButton.text}
        </S.TeamModalButton>
      </S.ModalControlsContainer>
    </S.ModalContainer>
  </S.ModalWrapper>
);
