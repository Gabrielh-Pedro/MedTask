import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaAlignRight, FaBook, FaBrain, FaChargingStation, FaChevronDown, FaGripLinesVertical, FaHandMiddleFinger, FaIceCream, FaLine, FaPencilAlt, FaPersonBooth, FaSuperpowers, FaUser, FaUserTimes } from "react-icons/fa";
import { scroller } from "react-scroll";
import Cursos from "../components/Cursos";


const floating = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;


const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 100px 150px 0px 150px;
  background-image: url("/backcursos.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding: 100px 20px 0px 20px;
 }
 ;`

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

const LeftCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 50%;
  gap: 20px;
  align-items: flex-start;
  padding: 0px 100px 100px 80px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    margin-top: 0px;
    padding: 0px 20px 0px 20px;
    gap: 20px;
  }

`;

const RightCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 0px 20px 0px 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    gap: 0px;
  }

`;

const ImageStyled2 = styled.img`
  width: 90%;
`;


const IconVetor = styled.img`
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 100px 100px;
  background-color: ${(props) => (props.$primary ? '#101010' : '#000F2D')} ;

  h1 {
    width: 100%;
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

    h1, .gradient-textCut {
      font-size: 40px;
      line-height: 40px;
    }

  }
`;

const MedCard = styled.div`
  cursor: pointer;
  width: 1037px;
  background-image: ${(props) =>
    props.$primary
      ? "url('1.webp')"
      : props.$secondary
        ? "url('2.webp')"
        : props.$triple
          ? "url('3.webp')"
          : "url('1.webp')"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 187px;
  padding: 20px 60px;
  text-align: left;
  align-items: left;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-out;

  p {
    font-weight: 300;
  }
  
  &:hover {
    animation: none; /* Para quando o mouse estiver sobre o card */
    transform: ${(props) => (props.$primary ? 'translateX(-20px)' : props.$secondary ? 'translateX(20px)' : 'translateX(-20px)')};
  }

  @media (max-width: 768px) {
    width: 349px;
    border-bottom-right-radius: 0px;
    height: 484px;
    background-image: ${(props) =>
    props.$primary
      ? "url('1mobile.png')"
      : props.$secondary
        ? "url('2mobile.png')"
        : props.$triple
          ? "url('3mobile.png')"
          : "url('1mobile.png')"};
  }
`;

const NameTitle = styled.h2`
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #1d68ff;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 40px;
    padding: 0px 20px 0px 20px;

    svg {
    display: none;
  }
  }
`;

const List = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 50%;
  padding: 0px 60px 0px 0px;

  p {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 40px;
    padding: 0px 20px 0px 20px;
  }

`;

const List2 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 50%;
  padding: 0px 0px 0px 60px;

  p {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 40px;
    padding: 0px 20px 0px 20px;
  }
`;

const DestaquesContainer = styled.div`
  color: #ffffff;
  width: 100%;
  max-width: 600px;
`;

const Titulo = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

const DestaqueItem = styled.div`
  font-size: 1rem;
  margin-bottom: 16px;
  color: #3a82f7;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 24px;

  &::after {
    content: '➜';
    position: absolute;
    left: 0;
    color: #3a82f7;
    ;
    font-size: 1.2rem;
  }
`;

const NumberContainer = styled.div`
  display: flex;
  gap: 100px;
  margin-left: -20px;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const OneCont = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

const Number = styled.div`
  position: absolute;
  font-size: 200px;
  font-style: italic;
  font-weight: bold;
  background: linear-gradient(100deg, #0055FF 10%, #000F2D 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  padding: 20px 20px 20px 0px;
`;

const Styler = styled.div`
  z-index: 5;
  margin-left: 90px;
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

  h2 {
    font-size: 20px;
    margin-top: 10px;
  }

  p {
    font-size: 15px;
  }

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

const ContainerScroll = styled.div`
  height: 300vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImageSections = styled.img`
  width: 90%;
  animation: ${floating} 2s ease-in-out infinite;
  @media (max-width: 768px) {
    width: 50%;
  }
`;


const CursoSection = () => {

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
            Cada fase da sua preparação exige uma determinada <span className="gradient-text">estratégia específica</span>
          </h1>
          <h2>
            Não importa se você está começando agora ou já está na reta final: temos o curso certo para o seu momento.
          </h2>
          <button className="superButton">ENCONTRE SEU CURSO AGORA!</button>
        </LeftCont1>
        <RightCont1>
          <ImageStyled src="andre.webp" alt="Marcus" />
        </RightCont1>
      </HomeContainer>
      <Slider>
        Aprovação não é questão de sorte. É estratégia.
        <ScrollButton onClick={handleScroll}>
          <Icon><FaChevronDown size={32} /></Icon>
        </ScrollButton>
      </Slider>
      <Container name = "next-section">
        <h1 style={{marginBottom: '60px'}}>
          Cursos direcionados para a sua evolução e <span className="gradient-textCut">real necessidade:</span>
        </h1>
      </Container>
      <ContainerScroll>
        <Section>
          <LeftSection>
            <h1>Curso Extensivo <span className="gradient-textCut">MedTask R1</span></h1>
            <h2>O Extensivo R1 é o curso mais completo para quem deseja uma preparação de longo prazo, com foco e consistência.</h2>
            <p>Este curso é indicado para quem entende que a aprovação começa com uma base sólida. Aqui, você não apenas aprende o conteúdo exigido pelas provas, mas desenvolve um raciocínio clínico afiado, com o suporte de professores experientes e tecnologia de ponta.</p>
            <button className="superButton">QUERO CONHECER O EXTENSIVO R1!</button>
          </LeftSection>
          <RightSection>
            <ImageSections src="superimg.png" alt="Marcus" />
          </RightSection>
        </Section>
        <Section>
          <LeftSection>
            <h1>Curso de Revisão <span className="gradient-textCut">"Premonições"</span></h1>
            <h2>A reta final da sua preparação precisa de foco cirúrgico.</h2>
            <p>Na fase final da preparação, o tempo é um recurso precioso.Por isso, o curso Premonições concentra os esforços nos temas historicamente mais cobrados, aplicando técnicas que reforçam o conteúdo com agilidade e eficiência.</p>
            <button className="superButton">QUERO CONHECER O CURSO DE REVISÃO!</button>
          </LeftSection>
          <RightSection>
            <ImageSections src="superimg.png" alt="Marcus" />
          </RightSection>
        </Section>
        <Section>
          <LeftSection>
            <h1>Recursos <span className="gradient-textCut">Extras e Personalizados</span></h1>
            <h2>Ferramentas inteligêntes para potenciar mais ainda seu estudo.</h2>
            <p>Além dos cursos completos, você tem acesso a recursos exclusivos que tornam sua preparação ainda mais eficiente.</p>
            <button className="superButton">CONHEÇA NOSSOS RECURSOS!</button>
          </LeftSection>
          <RightSection>
            <ImageSections src="superimg.png" alt="Marcus" />
          </RightSection>
        </Section>
      </ContainerScroll>
      <Cursos />
    </>
  );
};

export default CursoSection;