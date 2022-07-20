/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
import React, { useMemo, useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";

import { fileUpload } from "src/api";
import {
  Button,
  DefaultLayout,
  SubmitDeadLineTimeText,
  TextField,
} from "src/components";
import { useFetchUser } from "src/hook/query";

import * as S from "./styled";

export interface FileSubmitProps {
  lastModified?: number;
  lastModifiedDate?: Date;
  name?: string;
  size?: number;
  type?: string;
  webkitRelativePath?: string;
}
export const SubmitPage: React.FC = () => {
  const [uploadPercentage, setUploadPercentage] = useState<number>(0);
  const [processing, setProcessing] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<FileSubmitProps>({});
  const { data: user } = useFetchUser();
  const isUserHasTeam = useMemo(() => user?.result.team, [user]);

  const onUploadFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
  }, []);

  const handleOnSubmit = () => {
    if (!isUserHasTeam)
      return toast.error("유저 정보 또는 소속된 팀이 없어요 😞", {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    if (file.name === undefined)
      return toast.error("파일을 등록해주세요 😞", {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    fileUpload(file, { setUploadPercentage, setProcessing })
      .then(() => {
        setUploadPercentage(0);
        setProcessing(false);
        toast.success("파일 제출에 성공하셨습니다 😎", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "dark",
        });
      })
      .catch(() => {
        setUploadPercentage(0);
        setProcessing(false);
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
            </S.SubmitPageInfoContainer>
            <S.SubmitPageFormContainer style={{ maxWidth: "38rem" }}>
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
                disabled={uploadPercentage > 0}
              />
              <Button
                type="submit"
                onClick={handleOnSubmit}
                variant="contained"
                disabled={uploadPercentage > 0}
              >
                {uploadPercentage !== 0
                  ? processing
                    ? "🚀 업로드 처리 중"
                    : `🚀 업로드 중 - ${uploadPercentage}%`
                  : "파일 제출"}
              </Button>
            </S.SubmitPageFormContainer>
          </S.SubmitPageInfoWrapper>
        </S.SubmitPageContainer>
      </S.SubmitPageWrapper>
    </DefaultLayout>
  );
};
