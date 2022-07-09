import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import {
  AuthLabelTextField,
  AuthLayout,
  Button,
  ErrorMessage,
} from "src/components";
import { globalUserPrivacyInfo } from "src/store";

import * as S from "./styled";

type RegisterStep2Values = {
  phone: string;
  email: string;
};

export const RegisterStep2Page: React.FC = () => {
  const setPrivacyInfo = useSetRecoilState(globalUserPrivacyInfo);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterStep2Values>();
  const navigate = useNavigate();
  const onSubmit = ({ phone, email }: RegisterStep2Values) => {
    setPrivacyInfo({ phone, email });
    navigate("/auth/register/step3");
  };
  return (
    <AuthLayout title="개인정보 입력" src="/auth/register/step1">
      <S.Step2Form onSubmit={handleSubmit(onSubmit)}>
        <AuthLabelTextField
          importance
          className="이메일"
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: "필수 응답 항목입니다.",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일이 잘못되었습니다. 다시 입력해주세요.",
            },
          })}
        />
        <ErrorMessage error={errors.email?.message} />
        <AuthLabelTextField
          importance
          className="전화번호"
          type="phone"
          placeholder="전화번호를 입력해주세요."
          {...register("phone", {
            required: "필수 응답 항목입니다.",
            pattern: {
              value: /01[0-1, 7][0-9]{7,8}$/,
              message: "전화번호가 잘못되었습니다. 다시 입력해주세요.",
            },
          })}
        />
        <ErrorMessage error={errors.phone?.message} />
        <Button
          type="submit"
          disabled={!watch("email") || !watch("phone")}
          variant="contained"
        >
          다음으로
        </Button>
      </S.Step2Form>
    </AuthLayout>
  );
};
