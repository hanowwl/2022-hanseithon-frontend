import styled from "@emotion/styled";

import { Device } from "src/constants";

export const CompetitionTableContainer = styled.div`
  margin: 2rem 0;
  font-size: 1.4rem;

  @media ${Device.tabletS} {
    font-size: 1.2rem;
  }
`;

export const CompetitionTableWrapper = styled.table`
  width: 100%;
  text-align: center;
  vertical-align: middle;
`;

export const CompetitionTableThead = styled.td`
  background-color: #2c2c2c;
  padding: 1rem;
`;

export const CompetitionTableSector = styled.td`
  background-color: #2c2c2c;
  padding: 1rem;
`;

export const CompetitionTableExaminationItems = styled.td`
  border-bottom: 1px solid #2c2c2c;
  border-right: 1px solid #2c2c2c;
  padding: 1rem;
`;

export const CompetitionTableJudgingCriteria = styled.td`
  border-bottom: 1px solid #2c2c2c;
  border-right: 1px solid #2c2c2c;
  padding: 0.5rem;

  @media ${Device.tabletS} {
    padding: 0.3rem;
  }
`;

export const CompetitionTablePoints = styled.td`
  border-bottom: 1px solid #2c2c2c;
  border-right: 1px solid #2c2c2c;
  padding: 0.5rem;

  @media ${Device.tabletS} {
    padding: 0.3rem;
  }
`;
