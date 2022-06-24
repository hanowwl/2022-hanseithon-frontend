import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --color-text-primary: white;
    --color-background: #101012;
  }

  * {
    box-sizing: border-box;
    font-family: "Spoqa Han Sans Neo", sans-serif;
  }

  html {
    font-size: 10px !important;
  }

  html,
  body,
  #app {
    font-size: 1.2rem;
    font-weight: 400;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    letter-spacing: -0.1rem;
    color: var(--color-text-primary);
    background-color: var(--color-background);
  }
`;
