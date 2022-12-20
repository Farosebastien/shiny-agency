import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Survey from "./pages/Survey/Survey";
import Results from "./pages/Results/Results";
import Freelances from "./pages/Freelances/Freelances";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Profile from "./components/Profile/Profile";
import { ThemeProvider, SurveyProvider } from './utils/context/themeContext';
import GlobalStyle from "./utils/style/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <SurveyProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="/results" element={<Results />} />
            <Route path="/profile/:id"  element={<Profile />}  />
            <Route path="*" element={<Error />} />
          </Routes>
        </SurveyProvider>
        <Footer />
      </ThemeProvider>
    </React.StrictMode>
  </Router>
);

