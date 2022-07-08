import { atom } from "recoil";

import { DefaultModalProps, TeamModalProps } from "src/components";
import { MODAL_TYPES } from "src/constants";

interface DefaultModalType {
  type: typeof MODAL_TYPES.DefaultModal;
  props: DefaultModalProps;
}

interface TeamModalType {
  type: typeof MODAL_TYPES.TeamModal;
  props: TeamModalProps;
}

export type ModalStateItem = DefaultModalType | TeamModalType;

export const modalState = atom<ModalStateItem[]>({
  key: "modalState",
  default: [],
});
