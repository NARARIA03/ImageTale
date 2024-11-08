import { ReactNode } from "react";
import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from "styled-components";

const theme: DefaultTheme = {
  white: "#f2f2f2",
  black: "#444",
  skyblue: "#CCE4FB",
  blue: "#40A3FF",
  deepblue: "#2C73FF",
  grey: "#D9D9D9",
  deepgray: "#A9A9A9",
  pink: "#FFD6D6",
  deepyellow: "#FFF500",
  yellow: "#FFF8D6",
};

interface Props {
  children: ReactNode;
}

const styled = { createGlobalStyle };
const GlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: "CookieRun";
    src: url(/fonts/CookieRunRegular.otf);
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-family: "CookieRun";
    line-height: 1.5;
    color: #333;
    background-color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default function ColorProvider({ children }: Props): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
