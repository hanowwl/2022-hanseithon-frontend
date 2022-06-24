import React from "react";
import { useForm } from "react-hook-form";

import { LoginFormValues } from "src/api/user";
import { useLogin } from "src/hook/query";

export const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const { mutate } = useLogin();
  const onSubmit = ({ username, password }: LoginFormValues) => {
    mutate({ username, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="아이디를 입력해주세요."
          style={{ marginBottom: "1rem" }}
          {...register("username", {
            required: "필수 응답 항목입니다.",
          })}
        />
        <input
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
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};
