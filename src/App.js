import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";



function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />

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
    </>
  );
}

export default App;
