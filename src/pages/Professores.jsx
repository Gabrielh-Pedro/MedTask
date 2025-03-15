import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaBook, FaBrain, FaChevronDown, FaIceCream, FaUserTimes } from "react-icons/fa";
import { scroller } from "react-scroll";
import HomeSlack from "../components/HomeSlack";
import { motion } from "framer-motion";
import ProfessoresSlack from "../components/ProfessoresSlack";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 100px 150px 0px 150px;
  background-image: url("/backquem.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding: 100px 20px 0px 20px;
 }
`;

const LeftCont1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 0px 20px;

    h1 {
      font-size: 40px;
      line-height: 40px;
    }
 }

`;

const RightCont1 = styled.div`
  display: flex;
  position: relative;
  width: 50%;
  height: 100%;
  
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

`;

const ImageStyled = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 768px) {
    position: relative;
    padding-top: 20px;
    width: 100%;
  }
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #1D68FF;
  color: white;
  font-size: 30px;
  font-weight: bold;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    align-items: center;
    text-align: center;
    padding: 0px 0px 0px 0px;
    margin-top: 0px;
    gap: 0px;
  }

`;

const ScrollButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D9D9D9;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  border: none;
  border-radius: 100px 100px 0 0;

  svg {
    color: #1D68FF;
    transition: all 0.3s ease;
  }

  &:hover {
    svg {
      color: #0055FF;
    }
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-top: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 80px 150px;
  background-color: #D9D9D9;

  h1 {
    width: 100%;
    color: black;
  }

  @media (max-width: 768px) {
    padding: 80px 0px;
  }
`;
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 1200px;
  margin: 30px auto;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  line-height: 28px;
  font-weight: 800;
  text-transform: uppercase;
`;

const CardSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const rotateArrow = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const Card = styled(motion.div)`
  cursor: pointer;
  width: 250px;
  height: 350px;
  padding: 10px;
  text-align: center;
  background: linear-gradient(180deg, #1D68FF, #013398);
  border-radius: 20px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  transition: height 0.3s ease-out, transform 0.3s ease-in-out, background 0.5s ease-in-out;
  transform-origin: bottom;
  
  &:hover {
    transform: scale(1.05);
    background: linear-gradient(180deg, #0055FF, #001F70);
    box-shadow: 0px 10px 20px rgba(0, 85, 255, 0.3);
  }
`;

const CardImage = styled.img`
  position: absolute;
  top: 20px;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled(motion.div)`
  position: absolute;
  top: 170px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: transform 0.3s ease-out;
  
  svg {
    transition: transform 0.3s ease-in-out;
  }
  
  ${Card}:hover & svg {
    animation: ${rotateArrow} 0.3s forwards;
  }
`;

const ExpandedInfo = styled.div`
  position: absolute;
  top: 320px;
  display: flex;
  justify-content: center;
  padding: 0px 20px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 50px;
  font-size: 14px;
  font-weight: 300;
  text-align: center;

  h4 {
    margin-bottom: 5px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    text-align: left;
    font-size: 14px;
  }
`;

const professores = [
    {
        id: 1,
        nome: "Dra Karin Chiaradia Takatsu",
        profissao: "Oftalmologia",
        img: "professores/Karin.png",
        highlight: [
            "Médica Assistente USP-SP"
        ]
    },
    {
        id: 2,
        nome: "Dr Juan Pablo Murillo",
        profissao: "Co-fundador / Coordenador Marketing-Comercial",
        img: "professores/Juan.png",
        highlight: [
            "Revalidado 2020",
            "Residente Ginecologia e Obstetrícia",
            "Mentor de +2000 revalidados"
        ]
    },
    {
        id: 3,
        nome: "Dr Marcus Vinicius Takatsu",
        profissao: "Oftalmologia",
        img: "professores/Marcus.png",
        highlight: [
            "Residência e Subespecialista - USP-SP",
            "Assistente USP-SP"
        ]
    },
    {
        id: 4,
        nome: "Dra Pia Simone Zambrano",
        profissao: "Cirurgia Geral",
        img: "professores/Pia.png",
        highlight: [
            "Revalidada 2017",
            "Residência Médica: Cirurgia - UNESP"
        ]
    },
    {
        id: 5,
        nome: "Dr Antonio Cesar Rodrigues Almendra",
        profissao: "Cirurgia",
        img: "professores/Antonio.png",
        highlight: [
            "Formação e Residência - UNESP"
        ]
    },
    {
        id: 6,
        nome: "Dr Lucas Takikawa",
        profissao: "Cirurgia",
        img: "professores/Lucas.png",
        highlight: [
            "Subespecialista em Urologia - FAMEMA",
            "Onco-urologia - INCA",
            "Assistente - USP Bauru / FAMEMA"
        ]
    },
    {
        id: 7,
        nome: "Dr André Moraes",
        profissao: "Clínica Médica",
        img: "professores/12.png",
        highlight: [
            "Chefe do Pronto Socorro da Santa Casa de São Paulo",
            "Residência: Clínica Santa Casa",
            "Nefrologista - USP-SP"
        ]
    },
    {
        id: 8,
        nome: "Dr Dhiego Campostrini",
        profissao: "Clínica",
        img: "professores/Dhiego.png",
        highlight: [
            "Especialista em Cardiologia - UNIFESP",
            "Subespecialista em Eletrocardiografia - INCOR-HCFMUSP"
        ]
    },
    {
        id: 9,
        nome: "Dr Diego Soares",
        profissao: "Preventiva",
        img: "professores/Diego Soares.png",
        highlight: [
            "Assistente do Hospital Albert Einstein",
            "Professor Pós-Graduação Medicina da Família e Comunidade - Hospital Albert Einstein"
        ]
    },
    {
        id: 10,
        nome: "Dra Beatriz Kelly",
        profissao: "Pediatria",
        img: "professores/Beatriz Kelly.png",
        highlight: [
            "Residência Médica: Pediatria - HCFMUSP",
            "Subespecialista: UTI Pediátrica - HCFMUSP",
            "1º Colocada Geral na Prova da HCFMUSP"
        ]
    },
    {
        id: 11,
        nome: "Dr João Marcelo Guedes",
        profissao: "Ginecologia e Obstetrícia",
        img: "professores/João Marcelo.png",
        highlight: [
            "Subespecialista em Mastologia - Faculdade de Ciências Médicas de São Paulo",
            "Professor Faculdade de Ciências Médicas de São Paulo",
            "Mestrado - Universidade Nova Lisboa"
        ]
    }
];


const Professores = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleScroll = () => {
        scroller.scrollTo("next-section", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    return (
        <>
            <HomeContainer>
                <LeftCont1>
                    <h1>
                        Conheça os
                        <span className="gradient-text">Professores da MedTask</span>
                    </h1>
                    <h2>
                        Nosso time de médicos experientes já enfrentou esse desafio e hoje é referência na preparação para residência. Cada aula é planejada para oferecer conhecimento claro e eficiente.
                    </h2>
                    <button className="superButton">EU QUERO CONHECER!</button>
                </LeftCont1>
                <RightCont1>
                    <ImageStyled src="professores.png" alt="Marcus" />
                </RightCont1>
            </HomeContainer>

            <Slider>
                Aprovação não é questão de sorte. É estratégia.
                <ScrollButton onClick={handleScroll}>
                    <Icon><FaChevronDown size={32} /></Icon>
                </ScrollButton>
            </Slider>

            <Container name="next-section">
                <h1>Todos nossos professores <span className="gradient-textCut">prontos para te ajudar!</span></h1>
                <CardsContainer>
                    {professores.map((professor) => (
                        <Card
                            key={professor.id}
                            onMouseEnter={() => setHoveredCard(professor.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            animate={{ height: hoveredCard === professor.id ? 500 : 350 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <CardImage src={professor.img} alt={professor.nome} />
                            <Content>
                                <CardTitle>{professor.nome}</CardTitle>
                                <CardSubtitle>{professor.profissao}</CardSubtitle>
                                <FaChevronDown size={32} />
                            </Content>
                            {hoveredCard === professor.id && (
                                <ExpandedInfo
                                    as={motion.div}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h4>Detalhes</h4>
                                    <ul>
                                        {professor.highlight.map((item, index) => (
                                            <div key={index}>{item}</div>
                                        ))}
                                    </ul>
                                </ExpandedInfo>
                            )}
                        </Card>
                    ))}
                </CardsContainer>
            </Container>;
            <ProfessoresSlack />
        </>
    );
};

export default Professores;