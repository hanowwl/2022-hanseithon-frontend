import styled from "@emotion/styled";

export const FileInfoCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  background-color: var(--card-container-background);
  margin-top: 1.5rem;
  border-radius: 1rem;
  padding: 2.5rem;
  padding-right: 10rem;
  max-width: 77rem;

  & > p,
  h1 {
    letter-spacing: -0.05rem;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding-right: 0rem;
  } ;
`;

export const FileInfoCardTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

export const FileInfoCardDescription = styled.p`
  font-size: 1.5rem;
  margin: 0.2rem 0;
  color: #dbdbdb;
`;

export const FileInfoCardUserContainer = styled.div`
  display: flex;
  align-items: center;
`;
