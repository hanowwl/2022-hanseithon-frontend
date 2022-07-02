import React from "react";
import { useRecoilState } from "recoil";

import { Modal, Portal } from "src/components";
import { modalState } from "src/store/modal";

import * as S from "./styled";

export const ModalProvider: React.FC = () => {
  const [modalList] = useRecoilState(modalState);

  return (
    <Portal elementId="app-modal">
      {modalList.length > 0 && <S.ModalOverlay />}
      {modalList.map((modal, i) => (
        <Modal key={modal.type + i.toString()} {...modal.props} />
      ))}
    </Portal>
  );
};
