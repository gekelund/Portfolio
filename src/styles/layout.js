import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  grid-template-columns: 1fr 15fr 1fr;

  grid-template-areas:
    ". header header"
    ". main ."
    ". footer .";
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
