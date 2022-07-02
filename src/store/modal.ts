import { atom } from "recoil";

import { ModalProps, ModalType } from "src/components";

export interface ModalStateItem {
  type: ModalType;
  props: ModalProps;
}

export const modalState = atom<ModalStateItem[]>({
  key: "modalState",
  default: [],
});
