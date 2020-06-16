import React from "react";
import Navbar from "./components/navigation";
import { BrowserRouter } from "react-router-dom";
import Paths from "./components/navigation/paths";
import { GlobalStyle } from "./styles/globalStyles";
import { Header, Main, Footer } from "./styles/layout";
import SideBar from "./components/SideBar";
import { useMediaQuery } from "./utility";

function App() {
  const SmallScreenSize = useMediaQuery("(max-width: 768px)");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Paths />
      </Main>

      <Footer>{SmallScreenSize ? "" : <SideBar />}</Footer>
    </BrowserRouter>
  );
}

export default App;
