import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 1fr 10fr 1fr;
  grid-template-columns: 2fr 2fr 2fr;

  grid-template-areas:
    " header header header"
    "main main main"
    ". footer .";

  @media screen and (max-width: 1000px) {
    grid-template-rows: 1fr 1fr 150px;
    grid-template-columns: 1fr 6fr 1fr;
    grid-template-areas:
      ". main ."
      ". main ."
      "footer footer header";
  }

`;

export const Header = styled.div`
  grid-area: header;
`;

export const Main = styled.div`
  grid-area: main;
`;

export const Footer = styled.div`
  grid-area: footer;
`;
