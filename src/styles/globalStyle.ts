import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --color-primary: #4b5fff;
    --color-primary-darker: #3047ff;
    --color-primary-gray: #959595;
    --color-primary-disabled: #a4aeff;
    --color-text-primary: white;
    --color-background: #101012;
    --color-foreground: #18181a;

    --modal-background: var(--color-foreground);
    --modal-inputs-background: var(--color-background);
    --modal-inputs-placeholder: #aeaeae;

    --auth-text-error: #fd5f5f;
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
    letter-spacing: -0.01rem;
    color: var(--color-text-primary);
    background-color: var(--color-background);
    //  overflow-x: hidden;
  }
`;
