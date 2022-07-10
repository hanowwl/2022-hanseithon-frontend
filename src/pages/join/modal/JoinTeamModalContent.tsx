import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

import { JoinTeamFormValues } from "src/api/team";
import { ErrorMessage, ModalInput, ModalSelect } from "src/components";
import { TEAM_MEMBER_POSITION_VALUES } from "src/constants";
import { useModal } from "src/hook";
import { useJoinTeam } from "src/hook/query";

import * as S from "../styled";

export interface JoinTeamModalContentProps {
  inviteCode?: string;
}

export const JoinTeamModalContent = React.forwardRef<
  HTMLFormElement,
  JoinTeamModalContentProps
>(({ inviteCode }, ref) => {
  const { addModal, removeCurrentModal } = useModal();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinTeamFormValues>({ defaultValues: { inviteCode } });
  const { mutate } = useJoinTeam({
    onSuccess: ({ result }) => {
      queryClient.setQueryData("teams", result);
      queryClient.refetchQueries("useFetchUser");
      removeCurrentModal();
      addModal({
        type: "team",
        props: {
          title: `${result.name} 팀 참가 완료!`,
          description: "한세톤에 참여해주셔서 감사해요 :)",
          content: "",
          submitButton: {
            text: "이동하기",
          },
          handleOnSubmit: () => removeCurrentModal(),
        },
      });
    },
  });

  const onSubmit = (data: JoinTeamFormValues) => {
    mutate(data);
  };

  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <S.TeamModalInputContainer>
        <div>
          <ModalInput
            label="초대 코드"
            placeholder="초대 코드를 입력해주세요"
            {...register("inviteCode", {
              required: "올바른 초대코드를 입력해주세요",
              minLength: {
                value: 6,
                message: "올바른 초대코드를 입력해주세요",
              },
              maxLength: {
                value: 6,
                message: "올바른 초대코드를 입력해주세요",
              },
            })}
          />
          <ErrorMessage error={errors.inviteCode?.message} />
        </div>

        <S.TeamModalSelectContainer>
          <div>
            <ModalSelect
              label="참여 포지션"
              {...register("position", {
                required: "올바른 포지션을 선택해주세요",
              })}
            >
              <option value="">포지션을 선택해주세요</option>
              <option value={TEAM_MEMBER_POSITION_VALUES.DESIGN}>
                디자이너
              </option>
              <option value={TEAM_MEMBER_POSITION_VALUES.DEVELOPER}>
                개발자
              </option>
              <option value={TEAM_MEMBER_POSITION_VALUES.PM}>기획자</option>
            </ModalSelect>
            <ErrorMessage error={errors.position?.message} />
          </div>
        </S.TeamModalSelectContainer>
      </S.TeamModalInputContainer>
    </form>
  );
});
