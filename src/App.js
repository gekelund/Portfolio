import React from "react";
import Navbar from "./components/navigation";
import { BrowserRouter } from "react-router-dom";
import Paths from "./components/navigation/paths";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Paths />
      </BrowserRouter>
    </div>
  );
}

export default App;
