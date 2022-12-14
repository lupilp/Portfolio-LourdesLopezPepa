import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMi from "./components/SobreMi";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobreMi" element={<SobreMi />} />
      </Routes>
    </BrowserRouter>
  );
}
