import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100%;
  display: grid;

  grid-template-areas:
    "header header header"
    "main main main"
    ". footer .";
  grid-template-rows: 60px 1fr 80px;

  @media screen and (max-width: 768px) {
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
