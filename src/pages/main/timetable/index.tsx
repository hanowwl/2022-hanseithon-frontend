import React, { useState } from "react";

import * as S from "./styled";

export const TimeTable: React.FC = () => {
  const [timeTableStatus, setTimeTableStatus] = useState<boolean>(true);

  return (
    <S.TimeTableWrapper>
      <S.TimeTableSubTitle>
        저희 한세톤은 아래와 같이 진행될 예정이에요!
      </S.TimeTableSubTitle>
      <S.TimeTableSituation>
        <S.TimeTableSituationButton
          status={timeTableStatus}
          onClick={() => setTimeTableStatus(true)}
        >
          7월 20일 (수)
        </S.TimeTableSituationButton>
        <S.TimeTableSituationButton
          status={!timeTableStatus}
          onClick={() => setTimeTableStatus(false)}
        >
          7월 21일 (목)
        </S.TimeTableSituationButton>
      </S.TimeTableSituation>
      <S.TimeTableContentWrapper>
        {timeTableStatus ? (
          <>
            <S.TimeTableCalendar>
              <S.TimeTableTime>15:00 ~ 15:30</S.TimeTableTime>
              <S.TimeTableTodo>참가자 입장 및 등록</S.TimeTableTodo>
            </S.TimeTableCalendar>
            <S.TimeTableCalendar>
              <S.TimeTableTime>15:30 ~ 16:00</S.TimeTableTime>
              <S.TimeTableTodo>키노트</S.TimeTableTodo>
            </S.TimeTableCalendar>
            <S.TimeTableCalendar>
              <S.TimeTableTime>16:00 ~ 18:00</S.TimeTableTime>
              <S.TimeTableTodo>자율 개발</S.TimeTableTodo>
            </S.TimeTableCalendar>
            <S.TimeTableCalendar>
              <S.TimeTableTime>18:00 ~ 19:00</S.TimeTableTime>
              <S.TimeTableTodo>저녁식사 / 멘토링 오리엔테이션</S.TimeTableTodo>
            </S.TimeTableCalendar>
            <S.TimeTableCalendar>
              <S.TimeTableTime>19:00 ~ 19:30</S.TimeTableTime>
              <S.TimeTableTodo>이벤트 타임</S.TimeTableTodo>
            </S.TimeTableCalendar>
            <S.TimeTableCalendar>
              <S.TimeTableTime>19:30 ~ 23:00</S.TimeTableTime>
              <S.TimeTableTodo>자율 개발 및 멘토링</S.TimeTableTodo>
            </S.TimeTableCalendar>
            <S.TimeTableCalendar>
              <S.TimeTableTime>23:00 ~ 24:00</S.TimeTableTime>
              <S.TimeTableTodo>야식 시간 및 자율 개발</S.TimeTableTodo>
            </S.TimeTableCalendar>
          </>
        ) : (
          <>
            <S.TimeTableCalendar>
              <S.TimeTableTime>08:00 ~ 09:00</S.TimeTableTime>
              <S.TimeTableTodo>아침식사</S.TimeTableTodo>
            </S.TimeTableCalendar>
            <S.TimeTableCalendar>
              <S.TimeTableTime>09:00 ~ 12:00</S.TimeTableTime>
              <S.TimeTableTodo>자율 개발 및 멘토링</S.TimeTableTodo>
            </S.TimeTableCalendar>
            <S.TimeTableCalendar>
              <S.TimeTableTime>12:00 ~ 13:00</S.TimeTableTime>
              <S.TimeTableTodo>점심 식사</S.TimeTableTodo>
            </S.TimeTableCalendar>
            <S.TimeTableCalendar>
              <S.TimeTableTime>13:00 ~ 13:30</S.TimeTableTime>
              <S.TimeTableTodo>이벤트 타임</S.TimeTableTodo>
            </S.TimeTableCalendar>
            <S.TimeTableCalendar>
              <S.TimeTableTime>13:30 ~ 15:00</S.TimeTableTime>
              <S.TimeTableTodo>파일 제출 및 발표 준비</S.TimeTableTodo>
            </S.TimeTableCalendar>
            <S.TimeTableCalendar>
              <S.TimeTableTime>15:00 ~ 18:00</S.TimeTableTime>
              <S.TimeTableTodo>발표 및 심사</S.TimeTableTodo>
            </S.TimeTableCalendar>
            <S.TimeTableCalendar>
              <S.TimeTableTime>18:00 ~ 18:30</S.TimeTableTime>
              <S.TimeTableTodo>시상</S.TimeTableTodo>
            </S.TimeTableCalendar>
          </>
        )}
      </S.TimeTableContentWrapper>
    </S.TimeTableWrapper>
  );
};
