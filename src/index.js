import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import About from "./About";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="About" element={<About />} />
     
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


