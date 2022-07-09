import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";

import { RegisterStep3Values } from "src/api/user";
import ImportantSVG from "src/assets/svg/important.svg";
import {
  AuthLabelTextField,
  AuthLayout,
  Button,
  ErrorMessage,
} from "src/components";
import { SCHOOL } from "src/constants";
import { useRegister } from "src/hook/query";
import { globalUserPrivacyInfo } from "src/store";

import * as S from "./styled";

const {
  GRADES,
  DEPARTMENT_NEW,
  DEPARTMENT_OLD,
  ONE_CLASS_ROOM,
  TWO_CLASS_ROOM,
} = SCHOOL;

export const RegisterStep3Page: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterStep3Values>();
  const { phone, email } = useRecoilValue(globalUserPrivacyInfo);
  const [departments, setDepartments] = useState<string[]>([]);
  const [isAllValuesEntered, setIsAllValuesEntered] = useState<boolean>(false);

  const [classRoom, setClassRoom] = useState<number[]>([]);
  const { mutate } = useRegister();

  const onSubmitHandler = ({
    username,
    password,
    passwordCheck,
    name,
    studentDepartment,
    studentGrade,
    studentClassroom,
    studentNumber,
  }: RegisterStep3Values) => {
    mutate({
      username,
      password,
      passwordCheck,
      phone,
      email,
      name,
      studentDepartment,
      studentGrade,
      studentClassroom,
      studentNumber,
    });
  };

  const password = useRef({});
  password.current = watch("password", "");

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.studentGrade === 1) {
        setDepartments(DEPARTMENT_NEW);
        setClassRoom(TWO_CLASS_ROOM);
      } else if (value.studentGrade === 2) {
        setDepartments(DEPARTMENT_OLD);
        setClassRoom(TWO_CLASS_ROOM);
        if (value.studentDepartment === "네트워크보안과") {
          setClassRoom(ONE_CLASS_ROOM);
        }
      } else if (value.studentGrade === 3) {
        setDepartments(DEPARTMENT_OLD);
        setClassRoom(TWO_CLASS_ROOM);
        if (value.studentDepartment === "게임과") {
          setClassRoom(ONE_CLASS_ROOM);
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    const subscription = watch((value) => {
      if (
        value.username &&
        value.password &&
        value.passwordCheck &&
        value.name &&
        value.studentClassroom &&
        value.studentDepartment &&
        value.studentGrade &&
        value.studentNumber
      )
        return setIsAllValuesEntered(true);
      return setIsAllValuesEntered(false);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <AuthLayout title="회원가입" src="/auth/register/step2">
      <S.Step3Form onSubmit={handleSubmit(onSubmitHandler)}>
        <AuthLabelTextField
          importance
          className="아이디"
          type="text"
          placeholder="아이디를 입력해주세요."
          {...register("username", {
            required: "아이디를 입력해주세요.",
            pattern: {
              value: /^[a-z0-9$@$!%*#?&]{4,20}$/,
              message: "아이디 형식이 잘못되었습니다.",
            },
          })}
        />
        <ErrorMessage error={errors.username?.message} />
        <AuthLabelTextField
          importance
          className="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            pattern: {
              value: /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,20}$/,
              message: "비밀번호 형식이 잘못되었습니다.",
            },
          })}
        />
        <ErrorMessage error={errors.password?.message} />
        <AuthLabelTextField
          importance
          className="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 다시 한번 확인해주세요."
          {...register("passwordCheck", {
            required: "비밀번호를 입력해주세요.",
            pattern: {
              value: /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,20}$/,
              message: "비밀번호 형식이 잘못되었습니다.",
            },
            validate: (value) =>
              value === password.current ||
              "입력한 비밀번호와 일치하지 않습니다.",
          })}
        />
        <ErrorMessage error={errors.passwordCheck?.message} />
        <AuthLabelTextField
          importance
          className="이름"
          type="text"
          placeholder="이름을 입력해주세요."
          {...register("name", {
            required: "이름을 입력해주세요.",
            pattern: {
              value: /^[가-힣]{2,4}$/,
              message: "이름이 형식이 잘못되었습니다.",
            },
          })}
        />
        <ErrorMessage error={errors.name?.message} />
        <S.Step3SelectWrapper>
          <span>
            학과/학년/반/번호 <ImportantSVG />
          </span>
          <S.Step3SelectContainer>
            <S.Step3Select
              {...register("studentGrade", {
                required: "필수 응답 항목입니다.",
                valueAsNumber: true,
              })}
            >
              <option>학년</option>
              {GRADES.map((grade) => (
                <option value={grade}>{grade}학년</option>
              ))}
            </S.Step3Select>
            <S.Step3Select
              {...register("studentDepartment", {
                required: "필수 응답 항목입니다.",
              })}
            >
              <option>학과</option>
              {departments.map((department) => (
                <option value={department}>{department}</option>
              ))}
            </S.Step3Select>
            <S.Step3Select
              {...register("studentClassroom", {
                required: "필수 응답 항목입니다.",
                valueAsNumber: true,
              })}
            >
              <option>반</option>
              {classRoom.map((room) => (
                <option value={room}>{room}반</option>
              ))}
            </S.Step3Select>
            <S.Step3Select
              {...register("studentNumber", {
                required: "필수 응답 항목입니다.",
                valueAsNumber: true,
              })}
            >
              <option>번호</option>
              {Array.from(Array(30).keys()).map((_, i) => (
                <option value={i + 1}>{i + 1}번</option>
              ))}
            </S.Step3Select>
          </S.Step3SelectContainer>
        </S.Step3SelectWrapper>
        <Button
          disabled={!isAllValuesEntered}
          type="submit"
          variant="contained"
        >
          완료
        </Button>
      </S.Step3Form>
    </AuthLayout>
  );
};
