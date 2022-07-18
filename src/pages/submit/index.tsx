import React, { useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";

import { fileUpload } from "src/api";
import {
  Button,
  DefaultLayout,
  SubmitDeadLineTimeText,
  TextField,
} from "src/components";

import * as S from "./styled";

export const SubmitPage: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<object>({});
  const onUploadFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
  }, []);

  const handleOnSubmit = () => {
    fileUpload(file)
      .then(() => {
        toast.success("파일 제출에 성공하셨습니다 😎", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "dark",
        });
      })
      .catch(() => {
        toast.error("파일 제출에 실패했어요 😞", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "dark",
        });
      });

    if (inputRef.current) {
      inputRef.current.value = "";
      setFile({});
    }
  };

  return (
    <DefaultLayout conversion>
      <S.SubmitPageWrapper>
        <S.SubmitPageContainer>
          <h1>Hacking+Marathon</h1>
          <S.SubmitPageInfoWrapper>
            <S.SubmitPageInfoContainer>
              <p>
                1. 코로나 19의 확산으로 지도교사의 지시 불이행, 방역수칙 위반
                3회 이상 시 퇴장 조치합니다. <br />
              </p>
              <p>
                2. 대회에 참가하는 학생들은 한 시간에 한 번씩 자리에 착석하여
                인원 체크를 받아야 하며
                <br /> 팀원 중 무단 외출자가 있을 시 해당 팀은 실격처리됩니다.
                <br />
              </p>
              <p>
                3. 최종 제출은 7월 21일 13시 30분 부터 15시 00분까지 소스코드,
                발표자료, 실행 파일, <br />
                시연 영상을 ‘한세톤 웹 사이트’에 zip 파일로 제출합니다. <br />
              </p>
              <p>
                4. 사전 개발을 방지하기 위해 중간 제출은 20, 00, 04, 08, 12시 각
                정시부터 10분 동안 <br />
                zip 파일로 제출하며 심사에 반영되진 않습니다.
              </p>
              <p>
                5. 제한 시간 외 개발을 할 경우에는 해당 학생은 실격 처리합니다.
              </p>
              ＊제한 시간 외 개발에 대한 범위
              <br /> - 서비스에 대한 디자인, 기획 및 코드 작성
              <br /> - 판단하에 적합하지 않은 프레임워크 및 라이브러리 사용
              <br /> - 기존 작성했던 코드를 과도하게 재사용했다고 판단되는 경우
              <br />- 외부 유료 asset 사용
              {/* 1. 한세톤은 교내 강당에서 이틀이란 제한 시간 동안 주제에 맞는
              아이디어를 도출해 결과물을 완성하는 과정입니다. <br />
              2. 2022년 제 5회 한세톤은 다시 오프라인으로 진행됩니다.
              <br /> 3. 사용할 장비는 개인이 전부 지참해야 합니다.
              <br /> 4. 외부 API 및 외부 무료 에셋은 사용 가능합니다. <br />
              5. 20일 저녁, 야식. 21일 아침, 점심. 간식과 음료가 제공됩니다.{" "}
              <br />
              6. 반입 가능한 외부 음식(과자, 젤리, 음료) 및 개인 물품 이외의
              것은 반입을 금합니다.
              <br />
              7. 반드시 마스크와 실내용 신발 착용하셔야 입장 가능합니다.
              <br />
              8. 한세톤 참가자, 운영진, 교사를 제외한 미참가 학생은 출입이
              불가합니다. <br />
              9. 대회 시작 후, 특별한 사유 외에 외부로 외출 절대 불가하며
              무단으로 외출 시 경고와 해당 팀 실격 처리됩니다. <br />
              10. 부정행위 및 비난과 인신공격성 발언의 경우 차기 대회 참가
              자격이 박탈됩니다. */}
            </S.SubmitPageInfoContainer>
            <div>
              <S.SubmitPageDeadLineTimeWrapper>
                <div style={{ marginBottom: "3rem" }}>
                  <div style={{ fontSize: "3rem", fontWeight: "300" }}>
                    By the <strong>File Submit</strong> Deadline
                  </div>
                  <SubmitDeadLineTimeText />
                </div>
              </S.SubmitPageDeadLineTimeWrapper>
              <TextField
                type="file"
                accept="zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed"
                name="thumbnail"
                style={{ marginBottom: "2rem" }}
                ref={inputRef}
                onChange={onUploadFile}
              />
              <Button
                type="submit"
                onClick={handleOnSubmit}
                variant="contained"
              >
                파일 제출
              </Button>
            </div>
          </S.SubmitPageInfoWrapper>
        </S.SubmitPageContainer>
      </S.SubmitPageWrapper>
    </DefaultLayout>
  );
};
