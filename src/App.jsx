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
import Professores from "./pages/Professores";
import Extensivo from "./pages/cursos/Extensivo";
import Intensivo from "./pages/cursos/Intensivo";
import Premonicao from "./pages/cursos/Premonicao";
import Extras from "./pages/cursos/Extras";
import Blog from "./pages/Blog";


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
            <Route path="/professores" element={<Professores />} /> 
            <Route path="/fale-conosco" element={<FaleConosco />} /> 
            <Route path="/extensivo" element={<Extensivo />} /> 
            <Route path="/intensivo" element={<Intensivo />} /> 
            <Route path="/revisao" element={<Premonicao />} /> 
            <Route path="/extras" element={<Extras />} /> 
            <Route path="/blog" element={<Blog />} /> 

          </Routes>
          <Footer/>
    </Router>
  );
};

export default App;
