import styled from "@emotion/styled";

export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  letter-spacing: -0.15rem;
  margin-bottom: 8rem;
  padding-bottom: 5.1rem;
  border-bottom: 1px solid #aaaaaa;
`;

export const JoinDeadLineTitle = styled.h1`
  margin: 0 0 -1.5rem 0;
  padding: 0;
  text-align: center;
  font-size: 3.2rem;
  font-weight: 300;
  font-family: "Spectral SC", sans-serif;

  strong {
    font-weight: 800;
    font-family: "Spectral SC", sans-serif;
  }
`;

export const JoinDeadLineTimeText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 13rem;
  font-weight: 700;
`;

export const JoinPageSectionContentContainer = styled.div`
  display: flex;
`;

export const HanseithonJoinContainer = styled.div``;

export const HanseithonTitleText = styled.p`
  margin: 0;
  padding: 0;
  letter-spacing: -0.25rem;
  font-size: 4.6rem;
  font-weight: 200;
  font-family: "Spectral SC", sans-serif;
`;

export const HanseithonDescriptionText = styled.div`
  font-size: 2rem;
  font-weight: 300;
  line-height: 3.8rem;
  margin-bottom: 5rem;
`;

export const HanseithonDateText = styled.p`
  font-size: 1.5rem;
  line-height: 3rem;
`;

export const ButtonContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding-left: 15rem;

  & > button {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  & > button:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const TeamModalInputContainer = styled.div`
  margin-bottom: 3.6rem;

  & > div:not(:last-child) {
    margin-bottom: 2rem;
  }

  & > div > div:not(:last-child) {
    margin-bottom: 0.7rem;
  }

  & > div > p {
    margin: 0;
  }
`;

export const TeamModalSelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > div {
    width: 100%;
  }

  & > div:not(:last-child) {
    margin-right: 2rem;
  }
`;
