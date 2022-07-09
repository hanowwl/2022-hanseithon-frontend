import styled from "@emotion/styled";

import { TextField } from "src/components/common";

export const ModalInputLabel = styled.p`
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.08rem;
`;

export const StyledTextField = styled(TextField)`
  font-weight: 300;
  background-color: var(--modal-inputs-background);
  border: 1px solid var(--modal-inputs-background);
  transition: all 300ms;

  &:focus {
    border-color: rgba(75, 95, 255, 0.7);
  }

  &::placeholder {
    color: var(--modal-inputs-placeholder);
  }
`;
