import React from "react";

import * as S from "./styled";

export const Competition: React.FC = () => (
  <div>
    <div>
      <table>
        <S.CompetitionTableTheadWrapper>
          <td>부문</td>
          <td>심사 항목</td>
          <td>심사 기준</td>
          <td>배 점</td>
        </S.CompetitionTableTheadWrapper>

        <S.CompetitionTableTbodyWrapper>
          <div>
            <td>생활</td>
            <td>
              <tr>
                <td>기획</td>
                <td>
                  <tr>독창성</tr>
                  <tr>확장성</tr>
                  <tr>주제확장성 + 타당성</tr>
                  <tr>발표</tr>
                </td>
                <td>
                  <tr>10</tr>
                  <tr>10</tr>
                  <tr>10</tr>
                  <tr>10</tr>
                </td>
              </tr>
              <tr>
                <td>개발</td>
                <td>
                  <tr>최적화</tr>
                  <tr>구현완성도</tr>
                </td>
                <td>
                  <tr>10</tr>
                  <tr>20</tr>
                </td>
              </tr>
              <tr>
                <td>디자인</td>
                <td>
                  <tr>편의성</tr>
                  <tr>직관성</tr>
                  <tr>심미성</tr>
                </td>
                <td>
                  <tr>10</tr>
                  <tr>10</tr>
                  <tr>10</tr>
                </td>
              </tr>
            </td>
          </div>

          <div>
            <td>게임</td>
            <td>
              <tr>
                <td>기획</td>
                <td>
                  <tr>독창성</tr>
                  <tr>확장성</tr>
                  <tr>주제확장성 + 타당성</tr>
                  <tr>발표</tr>
                </td>
                <td>
                  <tr>10</tr>
                  <tr>10</tr>
                  <tr>10</tr>
                  <tr>10</tr>
                </td>
              </tr>
              <tr>
                <td>개발</td>
                <td>
                  <tr>최적화</tr>
                  <tr>구현완성도</tr>
                </td>
                <td>
                  <tr>10</tr>
                  <tr>20</tr>
                </td>
              </tr>
              <tr>
                <td>디자인</td>
                <td>
                  <tr>심미성</tr>
                  <tr>창의성</tr>
                  <tr>직관성</tr>
                  <tr>편의성</tr>
                </td>
                <td>
                  <tr>8</tr>
                  <tr>8</tr>
                  <tr>7</tr>
                  <tr>7</tr>
                </td>
              </tr>
            </td>
          </div>
        </S.CompetitionTableTbodyWrapper>
      </table>
    </div>
  </div>
);
