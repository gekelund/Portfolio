import React from "react";
import Navbar from "./components/navigation";
import { BrowserRouter } from "react-router-dom";
import Paths from "./components/navigation/paths";
import { GlobalStyle } from "./styles/globalStyles";
import { Header, Main, Footer } from "./styles/layout";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Paths />
      </Main>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
