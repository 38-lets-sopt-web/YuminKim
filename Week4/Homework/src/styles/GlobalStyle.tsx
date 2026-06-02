import { Global, css } from "@emotion/react";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          margin: 0;
          padding: 0;
          min-height: 100%;
        }

        button {
          cursor: pointer;
        }
      `}
    />
  );
}

export default GlobalStyle;
