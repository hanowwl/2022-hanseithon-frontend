import styled from "@emotion/styled";

export const Step3Form = styled.form`
  display: flex;
  flex-direction: column;

  & > button {
    margin-top: 7rem;
  }
  & > label {
    margin-top: 2rem;
  }
`;

export const Step3SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
`;

export const Step3SelectContainer = styled.div`
  display: flex;
`;

export const Step3Select = styled.select`
  margin-top: 1.5rem;
  margin-right: 2rem;
  outline: none;
  border: none;
  background-color: #18181a;
  color: #9f9f9f;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    background-color: #161616;
  }
`;
