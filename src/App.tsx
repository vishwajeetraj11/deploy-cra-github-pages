import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>YO</div>} />
        <Route path="/damn" element={<div>Damn</div>} />
        <Route path="/cream" element={<div>Cream</div>} />
      </Routes>
    </div>
  );
}

export default App;
