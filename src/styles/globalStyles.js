import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

html {
    height: 100%;
}

#root {
    height: 100%;
}

body {
    word-break: break-word;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    color: #ffffff;
    background-color: #232323;
    overflow-y: scroll;

    overflow-y: scroll;
    -ms-overflow-style: none;
  
    &::-webkit-scrollbar {
      display: none;
    }
}

h1 {
    color: orange;
    font-size: 2.5rem;
    letter-spacing: 0.4rem;
}

h2 {
    color: orange;
    font-weight: bold;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
}

h3 {
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
}

p {
    font-size: 1.1rem;
}

h4 {
    font-size: 1.2rem;
}
`;

export const ColorTheme = {
  primaryBackground: "#232323",
  font: "#ffffff",
  headline: "orange",
};
