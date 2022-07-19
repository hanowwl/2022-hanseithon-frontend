import styled from "@emotion/styled";

import { Device } from "src/constants";

export const SubmitPageWrapper = styled.div`
  margin-top: 2.8rem;
  font-size: 3rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SubmitPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  @media ${Device.tabletL} {
    & > h1 {
      font-size: 3rem;
    }
  }
`;

export const SubmitPageFormContainer = styled.div`
  & > button {
    :disabled {
      background-color: var(--color-primary-darker);
    }
  }
`;

export const SubmitPageInfoContainer = styled.div`
  display: flex;
  font-size: 1.8rem;
  line-height: 3rem;
  font-weight: 400;
  flex-direction: column;
  @media ${Device.tabletL} {
    margin-bottom: 3rem;
  }
`;

export const SubmitPageInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  & > div {
    @media ${Device.tabletL} {
      width: 100%;
    }
  }
  @media ${Device.tabletL} {
    flex-direction: column;
  }
`;

export const SubmitPageDeadLineTimeWrapper = styled.div`
  display: flex;
  & > div {
    font-size: 7rem;
  }

  & > div {
    @media ${Device.tabletL} {
      font-size: 5rem;
    }
  }
`;
