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
        window.open(
          "http://localhost:3000/internal",
          "_blank",
          "width=400, height=500",
        );
      },
      handleOnClose: () => {
        removeCurrentModal();
      },
    },
  });
