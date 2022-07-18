import React from "react";

// import * as S from "./styled";

export const Competition: React.FC = () => (
  <div>
    <table border={1} align="center" width="100%">
      <thead>
        <td>부문</td>
        <td>심사 항목</td>
        <td>심사 기준</td>
        <td>배 점</td>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={9}>생활</td>
          <td rowSpan={4}>기획</td>
          <td>독창성</td>
          <td>10</td>
        </tr>
        <tr>
          <td>확장성</td>
          <td>10</td>
        </tr>
        <tr>
          <td>주제적합성 + 타당성</td>
          <td>10</td>
        </tr>
        <tr>
          <td>발표</td>
          <td>10</td>
        </tr>
        <tr>
          <td rowSpan={2}>개발</td>
          <td>최적화</td>
          <td>10</td>
        </tr>
        <tr>
          <td>구현완성도</td>
          <td>20</td>
        </tr>
        <tr>
          <td rowSpan={3}>디자인</td>
          <td>편의성</td>
          <td>10</td>
        </tr>
        <tr>
          <td>직관성</td>
          <td>10</td>
        </tr>
        <tr>
          <td>심미성</td>
          <td>10</td>
        </tr>

        <tr>
          <td rowSpan={10}>게임</td>
          <td rowSpan={4}>기획</td>
          <td>독창성</td>
          <td>10</td>
        </tr>
        <tr>
          <td>재미 요소</td>
          <td>10</td>
        </tr>
        <tr>
          <td>주제적합성 + 타당성</td>
          <td>10</td>
        </tr>
        <tr>
          <td>발표</td>
          <td>10</td>
        </tr>
        <tr>
          <td rowSpan={2}>개발</td>
          <td>최적화</td>
          <td>10</td>
        </tr>
        <tr>
          <td>구현완성도</td>
          <td>20</td>
        </tr>
        <tr>
          <td rowSpan={4}>디자인</td>
          <td>심미성</td>
          <td>8</td>
        </tr>
        <tr>
          <td>창의성</td>
          <td>8</td>
        </tr>
        <tr>
          <td>직관성</td>
          <td>7</td>
        </tr>
        <tr>
          <td>편의성</td>
          <td>7</td>
        </tr>
      </tbody>
    </table>
  </div>
);
