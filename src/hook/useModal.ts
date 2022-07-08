import { useRecoilState } from "recoil";

import { modalState, ModalStateItem } from "src/store/modal";

export const useModal = () => {
  const [modalList, setModalList] = useRecoilState(modalState);

  const addModal = ({ type, props }: ModalStateItem) => {
    setModalList(
      (oldModalList) => [...oldModalList, { type, props }] as ModalStateItem[],
    );
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
