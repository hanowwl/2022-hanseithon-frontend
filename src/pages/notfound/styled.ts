import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NotFoundText = styled.div`
  font-size: 8rem;
  font-weight: 800;
  color: white;
  padding-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 100px;
  }
`;

export const NotFoundDescription = styled.div`
  font-size: 20px;
  text-align: center;
  line-height: 1.3;
  color: white;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const NotFoundGoToMainText = styled(Link)`
  margin-top: 2rem;
  font-weight: 500;
  text-decoration: none;
  width: 50%;
  & > button {
    font-size: 1.2rem;
  }
`;
