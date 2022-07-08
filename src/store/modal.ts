import { atom } from "recoil";

import { DefaultModalProps } from "src/components";
import { MODAL_TYPES } from "src/constants";

interface DefaultModalType {
  type: typeof MODAL_TYPES.DefaultModal;
  props: DefaultModalProps;
}

export type ModalStateItem = DefaultModalType;

export const modalState = atom<ModalStateItem[]>({
  key: "modalState",
  default: [],
});
