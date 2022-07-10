import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Device } from "src/constants";

export const TimeTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  user-select: none;
`;

export const TimeTableSubTitle = styled.div`
  font-size: 1.5rem;
  margin-top: -1.5rem;
  margin-bottom: 1rem;
`;

export const TimeTableSituation = styled.div`
  display: flex;
  margin-top: 1rem;
  border-top: 2px solid #dddddd;
  width: 100%;
`;

export const TimeTableSituationButton = styled.button<{ status: boolean }>`
  border: 0;
  background-color: #2c2c2c;
  color: #9a9a9a;
  outline: 0;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  width: 100%;
  padding: 1.4rem 6rem;
  transition: all ease-in-out 0.2s;
  ${({ status }) =>
    status &&
    css`
      background-color: #18181a;
      color: #ffffff;
    `}
  @media ${Device.tabletS} {
    padding: 1rem 3rem;
  }
`;

export const TimeTableCalendar = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.8rem;
`;

export const TimeTableTime = styled.div`
  width: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #18181a;
  border: 1px solid #2c2c2c;
  font-size: 1.3rem;
  font-weight: 600;
  margin-right: 0.5rem;
`;

export const TimeTableTodo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #2c2c2c;
  padding: 1.3rem 4.5rem;
  font-size: 1.3rem;
  font-weight: 500;
  @media ${Device.tabletS} {
    padding: 1.3rem 2.5rem;
  }
`;

export const TimeTableContentWrapper = styled.div`
  width: 100%;
  margin-top: 0.2rem;
  margin-bottom: 3rem;
`;
