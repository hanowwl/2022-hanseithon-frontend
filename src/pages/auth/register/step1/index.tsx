/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import * as S from "./styled";

export type RegisterStep1Values = {
  service: boolean;
  privacy: boolean;
  student: boolean;
};

export const RegisterStep1Page: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<RegisterStep1Values>();

  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const onSubmit = ({ service, privacy, student }: RegisterStep1Values) => {};

  const allAgreeHandler = useCallback(() => {
    if (!isAllChecked) {
      setIsAllChecked(true);
      reset({ service: true, privacy: true, student: true });
    } else {
      setIsAllChecked(false);
      reset({ service: false, privacy: false, student: false });
    }
  }, [isAllChecked, reset]);

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.student && value.service && value.privacy)
        return setIsAllChecked(true);
      return setIsAllChecked(false);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="isAllChecked">
            <S.CircleCheck checked={isAllChecked} />
            <S.NoneCheckBox
              id="isAllChecked"
              type="checkbox"
              onClick={() => {
                allAgreeHandler();
              }}
            />{" "}
          </label>
          <span>모두 동의합니다</span>
        </div>

        <div>
          <label htmlFor="student">
            <S.CircleCheck checked={watch("student")} />
            <S.NoneCheckBox
              id="student"
              type="checkbox"
              {...register("student")}
            />{" "}
          </label>
          <span>재학생이 맞으신가요?</span>
        </div>
        {errors.student?.message}

        <div>
          <label htmlFor="service">
            <S.CircleCheck checked={watch("service")} />
            <S.NoneCheckBox
              id="service"
              type="checkbox"
              {...register("service", {
                required: "필수 응답 항목입니다.",
              })}
            />{" "}
          </label>
          <span>서비스 이용약관</span>
        </div>
        {errors.service?.message}

        <div>
          <label htmlFor="privacy">
            <S.CircleCheck checked={watch("privacy")} />
            <S.NoneCheckBox
              id="privacy"
              type="checkbox"
              {...register("privacy", {
                required: "필수 응답 항목입니다.",
              })}
            />{" "}
          </label>
          <span>개인정보 수집 이용 동의</span>
        </div>
        {errors.privacy?.message}
      </form>
    </div>
  );
};
