import React from "react";

import { FilePart, TeamPart } from "src/constants";

import * as S from "./styled";

export interface FileInfoCardProps {
  name: string;
  size: number;
  type: "middle" | "final";
  teamType: "GAME" | "LIVING";
}

export const formatBytes = (bytes: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  if (sizes[i] === "Bytes")
    return `${(bytes / 1024 ** i).toFixed(0)} ${sizes[i]}`;
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
};

export const FileInfoCard: React.FC<FileInfoCardProps> = ({
  name,
  size,
  type,
  teamType,
}) => (
  <S.FileInfoCardContainer>
    <div>
      <S.FileInfoCardTitle>{name.split(".")[0]}</S.FileInfoCardTitle>
      <S.FileInfoCardDescription>
        제출한 파일의 크기는 : {formatBytes(size)}에요 👍
      </S.FileInfoCardDescription>
      <div style={{ marginTop: "1.5rem" }}>
        <S.FileInfoCardUserContainer>
          {TeamPart[teamType]}부분 {FilePart[type]} 제출
        </S.FileInfoCardUserContainer>
      </div>
    </div>
  </S.FileInfoCardContainer>
);
