import React from "react";
import Navbar from "./components/navigation";
import { BrowserRouter } from "react-router-dom";
import Paths from "./components/navigation/paths";
import { GlobalStyle } from "./styles/globalStyles";
import { AppContainer, Header, Main } from "./styles/layout";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header>
          <Navbar />
        </Header>
        <Main>
          <Paths />
        </Main>
      </BrowserRouter>
      <GlobalStyle />
    </AppContainer>
  );
}

export default App;
