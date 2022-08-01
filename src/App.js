import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "components/TopNav/TopNav";

function App() {
  return (
    <div className="main-container" data-uk-height-viewport="expand: true">
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
