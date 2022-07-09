import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { AuthLayout, Button } from "src/components";

import * as S from "./styled";

type RegisterStep1Values = {
  service: boolean;
  privacy: boolean;
  student: boolean;
};
export const RegisterStep1Page: React.FC = () => {
  const { register, reset, watch } = useForm<RegisterStep1Values>();

  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  const allAgreeHandler = useCallback(() => {
    setIsAllChecked((prev) => !prev);
    if (!isAllChecked) {
      reset({ service: true, privacy: true, student: true });
    } else {
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
    <AuthLayout
      title="한세톤 회원가입 / 서비스 이용약관 동의"
      src="/auth/login"
    >
      <S.Step1Form>
        <S.Step1SelectAllContainer>
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
          <S.Step1ContentInfo>모두 동의합니다</S.Step1ContentInfo>
        </S.Step1SelectAllContainer>
        <S.Step1SelectContainer>
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
          <S.Step1ContentInfo>서비스 이용약관</S.Step1ContentInfo>
          <S.Step1ViewAll
            onClick={() =>
              window.open(
                "https://github.com/Hansei-VPN/documents/blob/main/terms-of-service.md",
                "서비스 이용약관",
                "width=600, height=800",
              )
            }
          >
            전체보기
          </S.Step1ViewAll>
        </S.Step1SelectContainer>
        <S.Step1SelectContainer>
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
          <S.Step1ContentInfo>개인정보 수집 이용 동의</S.Step1ContentInfo>
          <S.Step1ViewAll
            onClick={() =>
              window.open(
                "https://github.com/Hansei-VPN/documents/blob/main/privacy-policy.md",
                "개인정보처리방침",
                "width=600, height=800",
              )
            }
          >
            전체보기
          </S.Step1ViewAll>
        </S.Step1SelectContainer>
        <S.Step1SelectContainer>
          <label htmlFor="student">
            <S.CircleCheck checked={watch("student")} />
            <S.NoneCheckBox
              id="student"
              type="checkbox"
              {...register("student")}
            />{" "}
          </label>
          <S.Step1ContentInfo>재학생이 맞으신가요?</S.Step1ContentInfo>
        </S.Step1SelectContainer>
        <Button
          type="submit"
          disabled={!isAllChecked}
          onClick={() => isAllChecked && navigate("/auth/register/step2")}
          variant="contained"
        >
          다음으로
        </Button>
      </S.Step1Form>
    </AuthLayout>
  );
};
