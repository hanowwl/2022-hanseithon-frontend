import React from "react";

import * as S from "./styled";

export const Competition: React.FC = () => (
  <S.CompetitionTableContainer>
    <S.CompetitionTableWrapper>
      <thead>
        <S.CompetitionTableThead>부문</S.CompetitionTableThead>
        <S.CompetitionTableThead>심사 항목</S.CompetitionTableThead>
        <S.CompetitionTableThead>심사 기준</S.CompetitionTableThead>
        <S.CompetitionTableThead>배 점</S.CompetitionTableThead>
      </thead>
      <tbody>
        <tr>
          <S.CompetitionTableSector rowSpan={9}>생활</S.CompetitionTableSector>
          <S.CompetitionTableExaminationItems rowSpan={4}>
            기획
          </S.CompetitionTableExaminationItems>
          <S.CompetitionTableJudgingCriteria>
            독창성
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>10</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableJudgingCriteria>
            확장성
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>10</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableJudgingCriteria>
            주제적합성 + 타당성
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>10</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableJudgingCriteria>
            발표
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>10</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableExaminationItems rowSpan={2}>
            개발
          </S.CompetitionTableExaminationItems>
          <S.CompetitionTableJudgingCriteria>
            최적화
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>10</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableJudgingCriteria>
            구현완성도
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>20</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableExaminationItems rowSpan={3}>
            디자인
          </S.CompetitionTableExaminationItems>
          <S.CompetitionTableJudgingCriteria>
            편의성
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>10</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableJudgingCriteria>
            직관성
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>10</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableJudgingCriteria>
            심미성
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>10</S.CompetitionTablePoints>
        </tr>

        <tr>
          <S.CompetitionTableSector rowSpan={10}>게임</S.CompetitionTableSector>
          <S.CompetitionTableExaminationItems rowSpan={4}>
            기획
          </S.CompetitionTableExaminationItems>
          <S.CompetitionTableJudgingCriteria>
            독창성
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>10</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableJudgingCriteria>
            재미 요소
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>10</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableJudgingCriteria>
            주제적합성 + 타당성
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>10</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableJudgingCriteria>
            발표
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>10</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableExaminationItems rowSpan={2}>
            개발
          </S.CompetitionTableExaminationItems>
          <S.CompetitionTableJudgingCriteria>
            최적화
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>10</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableJudgingCriteria>
            구현완성도
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>20</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableExaminationItems rowSpan={4}>
            디자인
          </S.CompetitionTableExaminationItems>
          <S.CompetitionTableJudgingCriteria>
            심미성
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>8</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableJudgingCriteria>
            창의성
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>8</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableJudgingCriteria>
            직관성
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>7</S.CompetitionTablePoints>
        </tr>
        <tr>
          <S.CompetitionTableJudgingCriteria>
            편의성
          </S.CompetitionTableJudgingCriteria>
          <S.CompetitionTablePoints>7</S.CompetitionTablePoints>
        </tr>
      </tbody>
    </S.CompetitionTableWrapper>
  </S.CompetitionTableContainer>
);
