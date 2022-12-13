import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Survey from "./pages/Survey/Survey";
import Results from "./pages/Results/Results";
import Freelances from "./pages/Freelances/Freelances";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Error from './components/Error/Error';

const GlobalStyle = createGlobalStyle`
  div {
    font-family: 'Trebuchet sans MS', Helevetica, sans-serif;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/resultats" element={<Results />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

