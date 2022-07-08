import styled from "@emotion/styled";

export const DefaultLayoutContainer = styled.div<{ dimensions?: boolean }>`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ dimensions }) => (dimensions ? "none" : "1220px")};
`;
