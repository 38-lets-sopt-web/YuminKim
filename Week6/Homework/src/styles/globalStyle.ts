import { createGlobalStyle } from "styled-components";
import type { AppTheme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: AppTheme }>`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;
