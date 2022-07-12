import React, { useEffect } from "react";
import { toast } from "react-toastify";

import { instance } from "src/api";
import { AuthLayout, Button } from "src/components";
import { useUrlQuery } from "src/hook";
import { useAuthenticateInternalNetwork } from "src/hook/query";

export const InternalPage: React.FC = () => {
  const query = useUrlQuery();

  const { mutate, isError } = useAuthenticateInternalNetwork({
    onSuccess: () => {
      toast.success(
        <>
          교내망 인증에 성공했어요 😊
          <br />
          5초 뒤에 창이 닫혀요
        </>,
        {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "dark",
        },
      );
      setTimeout(() => {
        window.close();
      }, 5000);
    },
    onError: () => {
      toast.error("교내망 인증에 실패했어요😞", {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    },
  });

  useEffect(() => {
    const token = query.get("token");
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    if (!token) {
      toast.error(
        <>
          인증 정보를 찾을 수 없어요 😞
          <br />
          5초 뒤에 창이 닫혀요
        </>,
        {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "dark",
        },
      );
      setTimeout(() => {
        window.close();
      }, 5000);
    }

    mutate("");
  }, []);

  return (
    <AuthLayout title="교내망 인증하기">
      {isError ? (
        <>
          내부망 인증에 실피했어요
          <br />
          교내 hsoc 와이파이에 접속 후 다시 시도해주세요
          <br />
          아래 &apos;돌아가기&apos; 버튼을 누르면 되돌아가요
        </>
      ) : (
        <>
          지금 교내망을 인증 중이에요 <br />
          인증이 성공적으로 이루지면 메인으로 되돌아가요
        </>
      )}
      {isError && (
        <Button
          style={{ marginTop: "1.5rem", padding: "0.7rem", fontSize: "1.4rem" }}
          variant="contained"
          onClick={() => window.close()}
        >
          돌아가기
        </Button>
      )}
    </AuthLayout>
  );
};
