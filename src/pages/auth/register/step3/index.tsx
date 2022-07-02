/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { SCHOOL } from "src/constants/school";

type RegisterStep3Values = {
  username: string;
  password: string;
  rePassword: string;
  name: string;
  studentDepartment: string;
  studentGrade: string;
  studentClassroom: string;
  studentNumber: number;
};

const {
  GRADES,
  DEPARTMENT_NEW,
  DEPARTMENT_OLD,
  ONE_CLASS_ROOM,
  TWO_CLASS_ROOM,
} = SCHOOL;

export const RegisterStep3Page: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<RegisterStep3Values>();
  const [departments, setDepartments] = useState<string[]>([]);
  const [classRoom, setClassRoom] = useState<string[]>([]);

  const onSubmitHandler = ({
    username,
    password,
    rePassword,
    name,
    studentDepartment,
    studentGrade,
    studentClassroom,
    studentNumber,
  }: RegisterStep3Values) => {};

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.studentGrade === "1학년") {
        setDepartments(DEPARTMENT_NEW);
        setClassRoom(TWO_CLASS_ROOM);
      } else if (value.studentGrade === "2학년") {
        setDepartments(DEPARTMENT_OLD);
        setClassRoom(TWO_CLASS_ROOM);
        if (value.studentDepartment === "네트워크보안과") {
          setClassRoom(ONE_CLASS_ROOM);
        }
      } else if (value.studentGrade === "3학년") {
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
          {...register("rePassword", {
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
            })}
          >
            <option>학년을 선택해주세요.</option>
            {GRADES.map((grade) => (
              <option>{grade}학년</option>
            ))}
          </select>
          <select
            {...register("studentDepartment", {
              required: "필수 응답 항목입니다.",
            })}
          >
            <option>학과를 선택해주세요.</option>
            {departments.map((department) => (
              <option>{department}</option>
            ))}
          </select>
          <select
            {...register("studentClassroom", {
              required: "필수 응답 항목입니다.",
            })}
          >
            <option>반을 선택해주세요.</option>
            {classRoom.map((room) => (
              <option>{room}반</option>
            ))}
          </select>
        </div>
        <button type="submit">다음으로</button>
      </form>
    </div>
  );
};
