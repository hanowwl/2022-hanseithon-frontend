import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

import { CreateTeamFormValues } from "src/api/team";
import { ErrorMessage, ModalInput, ModalSelect } from "src/components";
import { TEAM_MEMBER_POSITION_VALUES, TEAM_TYPE_VALUES } from "src/constants";
import { useModal } from "src/hook";
import { useCreateTeam } from "src/hook/query";

import * as S from "../styled";

export const CreateTeamModalContent = React.forwardRef<HTMLFormElement>(
  (props, ref) => {
    const { addModal, removeCurrentModal } = useModal();
    const queryClient = useQueryClient();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<CreateTeamFormValues>();
    const { mutate } = useCreateTeam({
      onSuccess: ({ result }) => {
        queryClient.setQueryData("teams", result);
        queryClient.refetchQueries("useFetchUser");
        removeCurrentModal();
        addModal({
          type: "team",
          props: {
            title: "팀 생성 완료!",
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

    const onSubmit = (data: CreateTeamFormValues) => {
      mutate(data);
    };

    return (
      <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
        <S.TeamModalInputContainer>
          <div>
            <ModalInput
              label="팀 이름"
              placeholder="2글자 이상/12글자 이하"
              {...register("name", {
                required: "올바른 팀명을 입력해주세요",
                minLength: {
                  value: 2,
                  message: "최소 2자, 최대 12자까지 입력할 수 있어요",
                },
                maxLength: {
                  value: 12,
                  message: "최소 2자, 최대 12자까지 입력할 수 있어요",
                },
              })}
            />
            <ErrorMessage error={errors.name?.message} />
          </div>
          <div>
            <ModalInput
              label="팀 설명"
              placeholder="팀 설명을 입력해주세요"
              {...register("description", {
                required: "올바른 팀 설명을 입력해주세요",
                min: "최소 2자, 최대 30자까지 입력할 수 있어요",
                max: "최소 2자, 최대 30자까지 입력할 수 있어요",
              })}
            />
            <ErrorMessage error={errors.description?.message} />
          </div>
          <S.TeamModalSelectContainer>
            <div>
              <div>
                <ModalSelect
                  label="참가 분야"
                  {...register("type", {
                    required: "올바른 참가 분야를 선택해주세요",
                  })}
                >
                  <option value="">분야를 선택해주세요</option>
                  <option value={TEAM_TYPE_VALUES.GAME}>게임</option>
                  <option value={TEAM_TYPE_VALUES.LIVING}>생활</option>
                </ModalSelect>
                <ErrorMessage error={errors.type?.message} />
              </div>
            </div>
            <div>
              <div>
                <ModalSelect
                  label="팀장 포지션"
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
            </div>
          </S.TeamModalSelectContainer>
        </S.TeamModalInputContainer>
      </form>
    );
  },
);
