import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";

import { RegisterStep3Values } from "src/api/user";
import { SCHOOL } from "src/constants";
import { useRegister } from "src/hook/query";
import { globalUserPrivacyInfo } from "src/store";

const {
  GRADES,
  DEPARTMENT_NEW,
  DEPARTMENT_OLD,
  ONE_CLASS_ROOM,
  TWO_CLASS_ROOM,
} = SCHOOL;

export const RegisterStep3Page: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<RegisterStep3Values>();
  const { phone, email } = useRecoilValue(globalUserPrivacyInfo);
  const [departments, setDepartments] = useState<string[]>([]);
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

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input
          type="text"
          placeholder="아이디 입력해주세요."
          {...register("username", {
            required: "필수 응답 항목입니다.",
          })}
        />
        <input
          type="text"
          placeholder="비밀번호를 입력해주세요."
          {...register("password", {
            required: "필수 응답 항목입니다.",
          })}
        />
        <input
          type="text"
          placeholder="비밀번호를 다시 한번 확인해주세요."
          {...register("passwordCheck", {
            required: "필수 응답 항목입니다.",
          })}
        />
        <input
          type="text"
          placeholder="이름을 입력해주세요."
          {...register("name", {
            required: "필수 응답 항목입니다.",
          })}
        />
        <div>
          <select
            {...register("studentGrade", {
              required: "필수 응답 항목입니다.",
              valueAsNumber: true,
            })}
          >
            <option>학년을 선택해주세요.</option>
            {GRADES.map((grade) => (
              <option value={grade}>{grade}학년</option>
            ))}
          </select>
          <select
            {...register("studentDepartment", {
              required: "필수 응답 항목입니다.",
            })}
          >
            <option>학과를 선택해주세요.</option>
            {departments.map((department) => (
              <option value={department}>{department}</option>
            ))}
          </select>
          <select
            {...register("studentClassroom", {
              required: "필수 응답 항목입니다.",
              valueAsNumber: true,
            })}
          >
            <option>반을 선택해주세요.</option>
            {classRoom.map((room) => (
              <option value={room}>{room}반</option>
            ))}
          </select>
          <select
            {...register("studentNumber", {
              required: "필수 응답 항목입니다.",
              valueAsNumber: true,
            })}
          >
            <option>번호을 선택해주세요.</option>
            {Array.from(Array(30).keys()).map((_, i) => (
              <option value={i + 1}>{i + 1}번</option>
            ))}
          </select>
        </div>
        <button type="submit">다음으로</button>
      </form>
    </div>
  );
};
