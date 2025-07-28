import { CustomThemeType } from "@/styles/theme";
import { css } from "@emotion/react";
import reset from "react-style-reset";
export const globalStyle = (theme: CustomThemeType) => css`
  ${reset};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${theme.colors.text};
    &::-webkit-scrollbar {
      width: 0.6rem;
      height: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0.4rem;
      background: pink;
    }

    &::-webkit-scrollbar-track {
      border-radius: 0.4rem;
      background: rgba(223, 203, 223, 0.34);
    }
  }

  html,
  body {
    scrollbar-gutter: stable;
    scroll-behavior: smooth;
    font-family: sans-serif;
    scrollbar-gutter: stable;
    font-size: 10px;
    @media (max-width: 720px) {
      font-size: 8px;
    }
  }
`;
