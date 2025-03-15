import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaBook, FaBrain, FaChevronDown, FaIceCream, FaPeopleArrows, FaStar, FaUserTimes } from "react-icons/fa";
import { scroller } from "react-scroll";
import Valuetion from "./Valuetion";
import { Fa1, Fa2, Fa3, FaGroupArrowsRotate, FaTachographDigital } from "react-icons/fa6";
import { BsFileBarGraphFill } from "react-icons/bs";

const floating = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const animateBackground = keyframes`
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 100px 150px 0px 150px;
  background-image: url("/all.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column-reverse;
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
    padding: 0px 20px 40px 20px;

    h1 {
      font-size: 40px;
      line-height: 40px;
    }
 }

`;

const RightCont1 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px 20px 60px 20px;
  }

`;

const ImageStyled = styled.img`
  width: 90%;
  height: auto;

  @media (max-width: 768px) {
    position: relative;
    padding-top: 20px;
    width: 100%;
  }
`;

const ImageSections = styled.img`
  width: 90%;
  animation: ${floating} 2s ease-in-out infinite;
  @media (max-width: 768px) {
    width: 80%;
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
  background-color: #000F2D;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  border: none;
  border-radius: 100px 100px 0 0;

  svg {
    color: white;
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
const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 80px 150px;
  background-color: #101010;

  h1 {
    width: 100%;
  }

  h2 {
    line-height: 32px;
    margin-top: 20px;
  }

  p {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 80px 0px 0px 0px;
    margin-top: 0px;
    gap: 0px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 80px 150px;
  background-color: #000F2D;

  h1 {
    width: 100%;
  }

  h2 {
    line-height: 32px;
    margin-top: 20px;
  }

  p {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 80px 0px 0px 0px;
    margin-top: 0px;
    gap: 0px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: 30px auto;

  button {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 0px 20px 0px 20px;
    gap: 20px;
  }
`;


const Card = styled.div`
  cursor: pointer;
  width: 350px;
  height: 300px;
  padding: 20px 60px;
  text-align: left;
  align-items: left;
  background: linear-gradient(
    315deg,
    rgba(18, 18, 18, 0.9),
    rgba(40, 40, 40, 0.7),
    rgba(58, 58, 58, 0.5),
    rgba(77, 77, 77, 0.3)
  );
  backdrop-filter: blur(12px);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  background-size: 300% 300%;
  animation: ${animateBackground} 6s infinite linear;
  transition: all 0.3s ease-out;

  p {
    font-weight: 300;
  }
  
  &:hover {
    animation: none; /* Para quando o mouse estiver sobre o card */
    transform: scale(1.02);
  }
`;

const CardTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

const IconTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: #6C96F7;
  font-size: 25px;
  margin-bottom: 10px;
  border-radius: 100%;
  background: linear-gradient(
    90deg,
    #1d68ffe5,
    #000f2db2
  );
`;

const Card2 = styled.div`
  cursor: pointer;
  width: 300px;
  height: 300px;
  padding: 20px 60px;
  text-align: left;
  align-items: left;
  background: linear-gradient(
    315deg,
    rgba(18, 18, 18, 0.9),
    rgba(40, 40, 40, 0.7),
    rgba(58, 58, 58, 0.5),
    rgba(77, 77, 77, 0.3)
  );
  backdrop-filter: blur(12px);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  background-size: 300% 300%;
  animation: ${animateBackground} 6s infinite linear;
  transition: all 0.3s ease-out;

  p {
    font-weight: 300;
  }
  
  &:hover {
    animation: none; /* Para quando o mouse estiver sobre o card */
    transform: scale(1.02);
  }
`;

const CardTitle2 = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

const IconTemplate2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: #6C96F7;
  font-size: 25px;
  margin-bottom: 10px;
  border-radius: 100%;
  background: linear-gradient(
    90deg,
    #1d68ffe5,
    #000f2db2
  );
`;

const ContainerScroll = styled.div`
  height: 400vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.section`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0px 150px;
  height: 100vh;
  z-index: 1;
  border-radius: 100px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px -10px 30px rgba(0, 0, 0, 0.5);
  background: radial-gradient(circle, rgba(0,30,91,0.8) 0%, rgba(0,30,91,0.6) 50%, rgba(0,30,91,0.3) 100%);
  backdrop-filter: blur(20px);

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
    text-align: center;
    padding: 0px 0px 0px 0px;
    gap: 0px;

    h1, .gradient-textCut {
      font-size: 40px;
      line-height: 40px;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  p, button {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
    padding: 60px 20px 0px 20px;
  }
`;

const LeftSection = styled.div`
  width: 50%;

  p, button {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
    padding: 0px 20px 0px 20px;
    margin-top: 50px;
    gap: 0px;
  }
`;

const Extensivo = () => {
    const [bgPosition, setBgPosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!isHovered) return;

        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setBgPosition({ x, y });
    };
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
                        Sua <span className="gradient-textCut">jornada completa</span> para a aprovação na residência médica.
                    </h1>
                    <h2>
                        O Extensivo MedTask R1 é o curso ideal para quem deseja uma preparação completa e estruturada para as provas de Residência Médica.
                    </h2>
                    <button className="superButton">QUERO DESCOBRIR MAIS!</button>
                </LeftCont1>
                <RightCont1>
                    <ImageStyled src="extensivo.png" alt="Marcus" />
                </RightCont1>
            </HomeContainer>

            <Slider>
                Aprovação não é questão de sorte. É estratégia.
                <ScrollButton onClick={handleScroll}>
                    <Icon><FaChevronDown size={32} /></Icon>
                </ScrollButton>
            </Slider>

            <Container name="next-section">
                <h1>
                    Como <span className="gradient-textCut"> funciona?</span>
                    <h2>
                        Com uma metodologia cientificamente comprovada, combinamos Revisão Espaçada, Prática Distribuída, Recuperação Ativa e Explicação Guiada para garantir alta retenção de conteúdo e desempenho superior na prova.
                    </h2>
                </h1>
                <CardsContainer>
                    <Card
                        style={{
                            backgroundPosition: isHovered ? `${bgPosition.x}% ${bgPosition.y}%` : "center",
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <IconTemplate>
                            <Fa1 />
                        </IconTemplate>
                        <CardTitle>Aulas divididas em módulos semanais para estudo progressivo.</CardTitle>
                    </Card>
                    <Card
                        style={{
                            backgroundPosition: isHovered ? `${bgPosition.x}% ${bgPosition.y}%` : "center",
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <IconTemplate>
                            <Fa2 />
                        </IconTemplate>
                        <CardTitle>Estrutura flexível para encaixar na sua rotina intensa.</CardTitle>
                    </Card>
                    <Card
                        style={{
                            backgroundPosition: isHovered ? `${bgPosition.x}% ${bgPosition.y}%` : "center",
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <IconTemplate>
                            <Fa3 />
                        </IconTemplate>
                        <CardTitle>Metodologia cientificamente comprovada para retenção eficiente.</CardTitle>
                    </Card>
                    <button className="superButton">QUERO CONHECER O EXTENSIVO R1!</button>
                </CardsContainer>
            </Container>
            
            <Container2>
                <h1>
                    O que você encontra no <span className="gradient-textCut"> Extensivo MedTask R1?</span>
                </h1>
                <CardsContainer>
                    <Card2
                        style={{
                            backgroundPosition: isHovered ? `${bgPosition.x}% ${bgPosition.y}%` : "center",
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <IconTemplate>
                            <FaStar />
                        </IconTemplate>
                        <CardTitle>310 aulas distribuídas em 30 semanas.</CardTitle>
                    </Card2>
                    <Card2
                        style={{
                            backgroundPosition: isHovered ? `${bgPosition.x}% ${bgPosition.y}%` : "center",
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <IconTemplate>
                            <BsFileBarGraphFill />
                        </IconTemplate>
                        <CardTitle>Flashcards inteligentes para reforço de conteúdo.</CardTitle>
                    </Card2>
                    <Card2
                        style={{
                            backgroundPosition: isHovered ? `${bgPosition.x}% ${bgPosition.y}%` : "center",
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <IconTemplate>
                            <FaGroupArrowsRotate />
                        </IconTemplate>
                        <CardTitle>Simulados semanais para medir seu progresso.</CardTitle>
                    </Card2>
                    <Card2
                        style={{
                            backgroundPosition: isHovered ? `${bgPosition.x}% ${bgPosition.y}%` : "center",
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <IconTemplate>
                            <FaPeopleArrows />
                        </IconTemplate>
                        <CardTitle>Grupo exclusivo com professores para tira-dúvidas.</CardTitle>
                    </Card2>
                    <button className="superButton">QUERO SABER MAIS!</button>
                </CardsContainer>
            </Container2>
         
            <Valuetion />
        </>
    );
};

export default Extensivo;