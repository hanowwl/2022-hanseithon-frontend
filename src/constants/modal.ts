import { DefaultModal, TeamModal } from "src/components";

export const MODAL_TYPE_VALUES = {
  default: DefaultModal,
  team: TeamModal,
};

export const MODAL_TYPES = {
  DefaultModal: "default",
  TeamModal: "team",
} as const;
