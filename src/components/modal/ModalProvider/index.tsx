/* eslint-disable no-redeclare */
/* eslint-disable no-case-declarations */
import React from "react";
import { useRecoilState } from "recoil";

import { Portal, DefaultModal, TeamModal } from "src/components";
import { modalState } from "src/store/modal";

import * as S from "./styled";

export const ModalProvider: React.FC = () => {
  const [modalList] = useRecoilState(modalState);

  return (
    <Portal elementId="app-modal">
      {modalList.length > 0 && <S.ModalOverlay />}
      {modalList.map((modal, i) => {
        const { type, props } = modal;

        switch (type) {
          case "default":
            return <DefaultModal key={type + i.toString()} {...props} />;
          case "team":
            return <TeamModal key={type + i.toString()} {...props} />;
          default:
            return null;
        }
      })}
    </Portal>
  );
};
