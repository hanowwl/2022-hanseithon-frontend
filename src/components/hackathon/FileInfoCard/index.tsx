import React from "react";

import { FilePart } from "src/constants";

import * as S from "./styled";

export interface FileInfoCardProps {
  name: string;
  size: number;
  type: "middle" | "final";
}

export const FileInfoCard: React.FC<FileInfoCardProps> = ({
  name,
  size,
  type,
}) => (
  <S.FileInfoCardContainer>
    <div>
      <S.FileInfoCardTitle>{name.split(".")[0]}</S.FileInfoCardTitle>
      <S.FileInfoCardDescription>
        제출한 파일의 크기는 : {size}에요 👍
      </S.FileInfoCardDescription>
      <div style={{ marginTop: "1.5rem" }}>
        <S.FileInfoCardUserContainer>
          {FilePart[type]}본 파일 제출
        </S.FileInfoCardUserContainer>
      </div>
    </div>
  </S.FileInfoCardContainer>
);
