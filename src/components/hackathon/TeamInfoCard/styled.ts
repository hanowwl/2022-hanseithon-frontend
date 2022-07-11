import styled from "@emotion/styled";

export const TeamInfoCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  background-color: var(--card-container-background);
  margin-top: 1.5rem;
  border-radius: 1rem;
  padding: 2.5rem;
  padding-right: 10rem;

  & > p,
  h1 {
    letter-spacing: -0.05rem;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding-right: 0rem;
  } ;
`;

export const TeamInfoCardTypeBox = styled.div`
  padding: 3.8rem;
  border-radius: 1rem;
  margin-right: 2.5rem;
  background-color: #4d506b;
  font-size: 3.5rem;
  font-weight: 600;
`;

export const TeamInfoCardTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

export const TeamInfoCardDescription = styled.p`
  font-size: 1.5rem;
  margin: 0.2rem 0;
  color: #dbdbdb;
`;

export const TeamInfoCardUserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TeamInfoCardUserMembersContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const TeamInfoCardUserMembersTitle = styled.div`
  color: #4b5fff;
  font-size: 1.4rem;
`;

export const TeamInfoCardUserMembersBox = styled.div`
  background-color: #4b5fff;
  border-radius: 5rem;
  /* font-size: 1rem; */
  padding: 0.15rem 0.78rem;
  margin-right: 0.5rem;
`;
