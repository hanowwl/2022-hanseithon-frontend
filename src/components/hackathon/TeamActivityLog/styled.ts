import styled from "@emotion/styled";

export const TeamActivityLogContainer = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  margin-top: 3.5rem;
`;

export const TeamActivityLogProfileImage = styled.img`
  width: 4.9rem;
  height: 4.9rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: #c4c4c4;
  outline: none;
  border: none;
`;

export const TeamActivityLogInfoContainer = styled.div`
  & > p {
    margin: 0.5rem;
  }
`;

export const TeamActivityLogInfoText = styled.p`
  font-size: 1.35em;
  font-weight: 300;

  & > span > marker {
    color: #4b5fff;
    font-weight: 600;
  }
`;
