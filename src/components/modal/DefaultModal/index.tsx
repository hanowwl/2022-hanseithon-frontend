import React from "react";

import { Button, ButtonVariantType } from "../../common/Button";
import * as S from "./styled";

export type DefaultModalType = "ALERT" | "CONFIRM";

export interface DefaultModalProps {
  type: DefaultModalType;
  title: string;
  content: React.ReactNode;
  button: {
    text: string;
    variant?: ButtonVariantType;
  };
  handleOnConfirm: () => void;
  handleOnClose?: () => void;
  width?: string | number;
}

export const DefaultModal: React.FC<DefaultModalProps> = ({
  type,
  width,
  title,
  content,
  button,
  handleOnConfirm,
  handleOnClose,
}) => (
  <S.ModalWrapper>
    <S.ModalContainer width={width}>
      <h1>{title}</h1>
      <div>{content}</div>
      <S.ModalControlsContainer>
        <Button
          variant={button.variant || "contained"}
          onClick={handleOnConfirm}
        >
          {button.text}
        </Button>
        {type === "CONFIRM" && (
          <Button variant="outlined" onClick={handleOnClose}>
            닫기
          </Button>
        )}
      </S.ModalControlsContainer>
    </S.ModalContainer>
  </S.ModalWrapper>
);
