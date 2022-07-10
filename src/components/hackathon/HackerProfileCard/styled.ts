import styled from "@emotion/styled";

export const HackerProfileCardContainer = styled.div`
  width: max-content;
  height: 7rem;
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  padding-right: 5rem;
  border-radius: 1rem;
  background-color: var(--color-foreground);

  p {
    margin: 0;
  }
`;

export const HackerProfileImage = styled.img`
  width: 4.9rem;
  height: 4.9rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: #c4c4c4;
  outline: none;
  border: none;
`;

export const HackerProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HackerNameText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const HackerInfoContainer = styled.div`
  display: flex;
  margin-top: 0.1rem;

  & > p:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const HackerInfoText = styled.p`
  color: #c6c6c9;
  font-size: 1.3rem;
  font-weight: 400;
`;
