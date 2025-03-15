import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import styled, { keyframes, css } from "styled-components";

const Container = styled.header`
  position: absolute;
  width: 100%;
  padding: 0px 150px;
  background: transparent;
  display: flex;
  height: 100px;
  top: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0px 20px;

    button {
      border-color: white;
      color: white;
    }
  }
`;

const Logo = styled.img`
  width: 250px;
  height: auto;

  @media (max-width: 768px) {
    width: 180px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  background-color: #1D68FF;
  padding: 16px 38px;
  border-radius: 100px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 15px;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  transition: all 0.3s ease;

  &:hover {
    font-weight: 600;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  color: #154CCB;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background: rgba(29, 104, 255, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 999;
  overflow-x: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  color: white;
  cursor: pointer;
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  min-width: 200px;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      transform: translateY(0);
      pointer-events: all;
      animation: ${fadeInUp} 0.3s ease-out;
    `}
`;

const CourseItem = styled(Link)`
  display: block;
  padding: 10px 15px;
  color: #154CCB;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    background: #f0f0f0;
  }
`;

const MobileDropdown = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 10px;
`;

const LoginButton = styled.button`

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Container>
      <Link to="/">
        <Logo src="/logo.png" alt="Logo" />
      </Link>
      <Nav>
        <StyledLink to="/" active={location.pathname === "/"}>Home</StyledLink>
        <StyledLink to="/about" active={location.pathname === "/about"}>Quem Somos</StyledLink>
        <div
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          style={{ position: "relative" }}
        >
          <StyledLink to="/cursos" active={location.pathname === "/cursos"}>Cursos ▾</StyledLink>
          <Dropdown isOpen={isDropdownOpen}>
            <CourseItem to="/extensivo">Extensivo R1</CourseItem>
            <CourseItem to="/intensivo">Intensivo</CourseItem>
            <CourseItem to="/revisao">Revisão</CourseItem>
            <CourseItem to="/extras">Extras e personalizados</CourseItem>
          </Dropdown>
        </div>        <StyledLink to="/blog" active={location.pathname === "/blog"} onClick={() => setIsOpen(false)}>Blog</StyledLink>
        <StyledLink to="/professores" active={location.pathname === "/professores"} onClick={() => setIsOpen(false)}>Professores</StyledLink>
        <StyledLink to="/fale-conosco" active={location.pathname === "/fale-conosco"}>Fale Conosco</StyledLink>
      </Nav>
      <LoginButton className="buttonBorder" onClick={() => window.location.href = 'https://medtask.com.br/'}>
        <FaUser /> Login
      </LoginButton>

      {/* Botão do menu mobile */}
      <MobileMenuButton onClick={() => setIsOpen(true)}>
        <FaBars style={{ color: '#154CCB' }} />
      </MobileMenuButton>

      {/* Menu Mobile com animação */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <CloseButton onClick={() => setIsOpen(false)}>
              <FaTimes />
            </CloseButton>
            <StyledLink to="/" onClick={() => setIsOpen(false)}>Home</StyledLink>
            <StyledLink to="/about" onClick={() => setIsOpen(false)}>Quem Somos</StyledLink>
            <StyledLink to="/cursos" onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}>
              Cursos ▾
            </StyledLink>
            <MobileDropdown isOpen={isMobileDropdownOpen}>
              <CourseItem to="/extensivo">Extensivo R1</CourseItem>
              <CourseItem to="/intensivo">Intensivo</CourseItem>
              <CourseItem to="/revisao">Revisão</CourseItem>
              <CourseItem to="/extras">Extras e personalizados</CourseItem>
            </MobileDropdown>            <StyledLink to="/blog" onClick={() => setIsOpen(false)}>Blog</StyledLink>
            <StyledLink to="/professores" onClick={() => setIsOpen(false)}>Professores</StyledLink>
            <StyledLink to="/fale-conosco" onClick={() => setIsOpen(false)}>Fale Conosco</StyledLink>
            <button className="buttonBorder" onClick={() => window.location.href = 'https://medtask.com.br/'}>
              <FaUser /> Login
            </button>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Header;
