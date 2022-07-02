import React, { useEffect } from "react";

import { Button, ButtonVariantType } from "../Button";
import * as S from "./styled";

export type ModalType = "ALERT" | "CONFIRM";

export interface ModalProps {
  type: ModalType;
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

export const Modal: React.FC<ModalProps> = ({
  type,
  width,
  title,
  content,
  button,
  handleOnConfirm,
  handleOnClose,
}) => {
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
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
};
