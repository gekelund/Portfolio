import React from "react";
import Navbar from "./components/navigation";
import { BrowserRouter } from "react-router-dom";
import Paths from "./components/navigation/paths";
import { GlobalStyle } from "./styles/globalStyles";
import { AppContainer, Header, Main, Footer } from "./styles/layout";
=======

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <BrowserRouter>
        <Header>
          <Navbar />
        </Header>
        <Main>
          <Paths />
        </Main>

        <Footer></Footer>
      </BrowserRouter>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
