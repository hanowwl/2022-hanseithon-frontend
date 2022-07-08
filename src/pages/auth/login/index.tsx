import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { LoginFormValues } from "src/api/user";
import { AuthLabelTextField, AuthLayout, Button } from "src/components";
import { useLogin } from "src/hook/query";

import * as S from "./styled";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginFormValues>();
  const { mutate } = useLogin();
  const onSubmit = ({ username, password }: LoginFormValues) => {
    mutate({ username, password });
  };

  return (
    <AuthLayout title="로그인" src="/">
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <AuthLabelTextField
          importance
          className="아이디"
          type="text"
          placeholder="아이디를 입력해주세요."
          style={{ marginBottom: "1rem" }}
          {...register("username", {
            required: "필수 응답 항목입니다.",
          })}
        />
        <AuthLabelTextField
          importance
          className="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register("password", {
            required: "필수 응답 항목입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상이여야 합니다,",
            },
          })}
        />
        <Button type="submit" variant="contained">
          로그인
        </Button>
      </S.LoginForm>
      <Button
        onClick={() => navigate("/auth/register/step1")}
        style={{ marginTop: "2.5rem" }}
        type="submit"
        variant="outlined"
      >
        회원가입
      </Button>
    </AuthLayout>
  );
};
