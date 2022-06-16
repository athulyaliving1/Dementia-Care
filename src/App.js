import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
// import Add from './components/Add.js'
// import Dashboard from './components/Dashboard.js';
// import Edit from './components/Edit.js';
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'

loadProgressBar()

function App() {
  return (
    <>
<BrowserRouter>
      
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="add" element={<Add />} />
          <Route path="edit" element={<Edit />} /> */}

          

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page in Deveploment!</p>
              </main>
            }
          />
        </Routes>
       
      </BrowserRouter>

    </>
  );
}

export default App;