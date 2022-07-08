import React from "react";
import { useRecoilState } from "recoil";

import { Portal } from "src/components";
import { MODAL_TYPE_VALUES } from "src/constants";
import { modalState } from "src/store/modal";

import * as S from "./styled";

export const ModalProvider: React.FC = () => {
  const [modalList] = useRecoilState(modalState);

  return (
    <Portal elementId="app-modal">
      {modalList.length > 0 && <S.ModalOverlay />}
      {modalList.map((modal, i) => {
        const { type, props } = modal;
        const ModalComponent = MODAL_TYPE_VALUES[type];
        return <ModalComponent key={type + i.toString()} {...props} />;
      })}
    </Portal>
  );
};
