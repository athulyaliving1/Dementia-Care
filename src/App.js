import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Footer from "./components/Main/Footer.js";
import MbNav from "./components/Main/MbNav.js";
import NavbarXl from "./components/Main/NavbarXl.js";
import Thankpage from "./components/Main/ThankPage.js";

function App() {
  return (
    <>
      <NavbarXl />
      <MbNav />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="tkpage" element={<Thankpage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page in Deveploment!</p>
              </main>
            }
          />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
