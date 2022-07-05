import { css } from "@emotion/react";
import styled from "@emotion/styled";

import CircleCheckSVG from "src/assets/svg/circle-check.svg";

export const Step1Form = styled.form`
  display: flex;
  flex-direction: column;

  & > button {
    margin-top: 3rem;
  }
`;

export const Step1SelectAllContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 600;
  font-size: 1.8rem;
  padding-bottom: 2rem;
  margin: 1rem 0 2.5rem;
  border-bottom: 1px solid var(--color-primary-gray);
`;

export const Step1SelectContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  margin-left: 1.5rem;
  margin-bottom: 2.5rem;
  & > span {
    font-weight: 300;
    font-size: 1.6em;
  }
`;

export const Step1ContentInfo = styled.span`
  margin-left: 1.5rem;
  flex: 1;
`;

export const Step1ViewAll = styled.div`
  cursor: pointer;
  color: var(--color-primary-gray);
`;

export const CircleCheck = styled(CircleCheckSVG)<{ checked: boolean }>`
  cursor: pointer;
  border: 2px solid var(--color-primary-gray);
  border-radius: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  ${({ checked }) =>
    checked &&
    css`
      border: 2px solid var(--color-primary);
      path {
        fill: var(--color-primary);
      }
    `}
`;

export const NoneCheckBox = styled.input`
  display: none;
`;
