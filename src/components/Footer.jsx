import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Importa Link do HashRouter
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: #154CCB;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 100px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 350px;
  filter: brightness(0) invert(1);
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    color: white;
    font-size: 30px;
    transition: 0.3s;

    &:hover {
      color: #0e143d;
    }
  }
`;

const Links = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;

  a, span {
    color: white;
    text-decoration: none;
    font-size: 14px;
    
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const RightSection = styled.div`
  text-align: right;

  h2 {
    margin-bottom: 15px;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 5px;

    a {
      color: white;
      text-decoration: none;
      font-size: 18px;
      transition: all 0.3s ease;

      &:hover {
        text-decoration: underline;
        transform: translateX(-10px);
      }
    }
  }

  p {
    margin-top: 20px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 40px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftSection>
        <Logo src="/logo.png" alt="Logo" />
        <SocialIcons>
          <a href="https://www.instagram.com/grupomedtask/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.youtube.com/@grupomedtask" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://wa.me/5511914297094" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </SocialIcons>
        <Links>
          <Link to="/politica-de-privacidade">Política de Privacidade</Link>
          <span>|</span>
          <Link to="/lgpd">Termos de Uso</Link>
        </Links>
      </LeftSection>

      <RightSection>
        <h2>Navegue pelo site</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Quem Somos</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/professores">Professores</Link>
          <Link to="/fale-conosco">Fale Conosco</Link>
        </nav>
        <p>© {new Date().getFullYear()} MedTask. Todos os direitos reservados. | Desenvolvido e implantado por GrowUx</p>
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;
