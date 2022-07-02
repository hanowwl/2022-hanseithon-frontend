import { useRecoilState } from "recoil";

import { ModalProps, ModalType } from "src/components";
import { modalState } from "src/store/modal";

interface AddModalProps {
  type: ModalType;
  props: Omit<ModalProps, "type">;
}

export const useModal = () => {
  const [modalList, setModalList] = useRecoilState(modalState);

  const addModal = ({ type, props }: AddModalProps) => {
    setModalList((oldModalList) => [
      ...oldModalList,
      { type, props: { type, ...props } },
    ]);
  };

  const removeCurrentModal = () => {
    const newModalList = [...modalList];
    newModalList.pop();
    setModalList(newModalList);
  };

  return {
    addModal,
    removeCurrentModal,
  };
};
