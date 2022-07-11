import { toast } from "react-toastify";

import { checkIsInternalNetwork } from "src/api";
import { ModalStateItem } from "src/store/modal";

interface NetworkValidationModalProps {
  addModal: ({ type, props }: ModalStateItem) => void;
  removeCurrentModal: () => void;
}

export const NetworkValidationModal = ({
  addModal,
  removeCurrentModal,
}: NetworkValidationModalProps) =>
  addModal({
    type: "team",
    props: {
      width: "42rem",
      title: "교내 사설망 인증하기",
      description:
        "교내 사설망 인증은 한세사이버보안고등학교 재학생인증을 위한 수단입니다. 교내 인터넷인 hsoc, senwifi로 접속해주세요.",
      content: "",
      closeButton: {
        text: "취소하기",
      },
      submitButton: {
        text: "인증하기",
      },
      handleOnSubmit: () => {
        checkIsInternalNetwork()
          .then(() => {
            toast.success("교내망 인증에 성공했어요😊", {
              autoClose: 3000,
              position: toast.POSITION.BOTTOM_RIGHT,
              theme: "dark",
            });
          })
          .catch(() => {
            toast.error("교내망 인증에 실패했어요😞", {
              autoClose: 3000,
              position: toast.POSITION.BOTTOM_RIGHT,
              theme: "dark",
            });
          });
      },
      handleOnClose: () => {
        removeCurrentModal();
      },
    },
  });
