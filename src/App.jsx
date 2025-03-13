import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CursoSection from "./pages/CursoSection";
import FaleConosco from "./pages/FaleConosco";

// Estilos globais
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@200;300;400;500;600;700&display=swap');

  body {
    font-family: 'Bai Jamjuree', sans-serif;
    background-color: #f8f9fa;
    color: #333;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cursos" element={<CursoSection />} /> 
            <Route path="/fale-conosco" element={<FaleConosco />} /> 
          </Routes>
          <Footer/>
    </Router>
  );
};

export default App;
