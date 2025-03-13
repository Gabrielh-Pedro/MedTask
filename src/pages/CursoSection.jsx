import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaAlignRight, FaBook, FaBrain, FaChargingStation, FaChevronDown, FaGripLinesVertical, FaHandMiddleFinger, FaIceCream, FaLine, FaPencilAlt, FaPersonBooth, FaSuperpowers, FaUser, FaUserTimes } from "react-icons/fa";
import { scroller } from "react-scroll";
import Cursos from "../components/Cursos";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  height: auto;
  background-image: url("/backcursos.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  overflow: hidden;
`;

const Cont = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LeftCont1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 50%;
  margin-top: 100px;
  gap: 20px;
  align-items: flex-start;
  padding: 80px 100px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    gap: 20px;
    padding: 80px 20px;

    h1 {
      font-size: 40px;
    }
  }

`;

const RightCont1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: 100px;
  gap: 20px;
  padding: 80px 0px 0px 0px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 0px 0px 0px 0px;
    margin-top: 0px;
    gap: 0px;
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

const ImageStyled = styled.img`
  height: 100%;
  object-fit: cover;
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
        <Cont>
          <LeftCont1>
            <h1>
              Cada fase da sua preparação exige uma determinada <span className="gradient-text">estratégia específica</span>
            </h1>
            <h2>
              Não importa se você está começando agora ou já está na reta final: temos o curso certo para o seu momento.
            </h2>
            <p>Estudar para as provas de residência médica não é um processo linear.Existem momentos em que é preciso construir uma base firme. Outros, em que o foco deve estar na revisão e no treinamento intensivo.

              <br /><br /><span style={{ fontWeight: 'bold' }}>Na MedTask, cada curso foi pensado para atender essas diferentes necessidades.</span> Aqui, você encontra o método certo para o seu momento atual – com um planejamento claro, inteligente e personalizado.</p>
            <button className="superButton">ENCONTRE SEU CURSO AGORA!</button>
          </LeftCont1>
          <RightCont1>
            <ImageStyled src="andre.webp" alt="Marcus" />
          </RightCont1>
        </Cont>
        <Slider>
          Aprovação não é questão de sorte. É estratégia.
          <ScrollButton onClick={handleScroll}>
            <Icon><FaChevronDown size={32} /></Icon>
          </ScrollButton>
        </Slider>
      </HomeContainer>
      <Container name='next-section'>
        <Cont>
          <LeftCont>
            <h1>Curso Extensivo <br /> <span className="gradient-text">MedTask R1</span></h1>
            <p><span style={{ fontWeight: 'bold' }}>O Extensivo R1 é o <span className="gradient-text">curso mais completo</span> para quem deseja uma preparação de longo prazo, com foco e consistência.</span> <br /><br />Este curso é indicado para quem entende que a aprovação começa com uma base sólida. Aqui, você não apenas aprende o conteúdo exigido pelas provas, mas desenvolve um raciocínio clínico afiado, com o suporte de professores experientes e tecnologia de ponta.</p>
            <DestaquesContainer>
              <Titulo>Destaques do Extensivo R1:</Titulo>
              <DestaqueItem>Planejamento semanal ajustado pela IA conforme seu desempenho.</DestaqueItem>
              <DestaqueItem>Revisão Espaçada aplicada para reforçar os conteúdos mais cobrados.</DestaqueItem>
              <DestaqueItem>Banco de questões comentadas e atualizadas continuamente.</DestaqueItem>
              <DestaqueItem>Simulados periódicos que simulam o ambiente real da prova.</DestaqueItem>
            </DestaquesContainer>
            <button className="superButton">QUERO CONHECER O EXTENSIVO R1!</button>
          </LeftCont>
          <RightCont>
            <ImageStyled2 src="superimg.png" alt="Marcus" />
          </RightCont>
        </Cont>
      </Container>
      <Container $primary>
        <Cont>
          <LeftCont>
            <h1>Curso de Revisão <br /> <span className="gradient-text">"Premonições"</span></h1>
            <p><span style={{ fontWeight: 'bold' }}>A reta final da sua preparação precisa de <span className="gradient-text">foco cirúrgico.</span></span> <br /><br />Na fase final da preparação, o tempo é um recurso precioso. Por isso, o curso Premonições concentra os esforços nos temas historicamente mais cobrados, aplicando técnicas que reforçam o conteúdo com agilidade e eficiência.</p>
            <DestaquesContainer>
              <Titulo>Destaques da Revisão Premonição:</Titulo>
              <DestaqueItem>Análise das últimas edições das principais provas de residência médica.</DestaqueItem>
              <DestaqueItem>Revisões intensivas com professores especializados em cada tema.</DestaqueItem>
              <DestaqueItem>Simulados com questões inéditas, focadas nos conteúdos com maior chance de cobrança.</DestaqueItem>
              <DestaqueItem>Flashcards inteligentes para otimizar a memorização de conceitos críticos.</DestaqueItem>
            </DestaquesContainer>
            <button className="superButton">QUERO SABER MAIS SOBRE O CURSO DE REVISÃO!</button>
          </LeftCont>
          <RightCont>
            <ImageStyled2 src="superimg.png" alt="Marcus" />
          </RightCont>
        </Cont>
      </Container>
      <Container>
        <Cont>
          <LeftCont>
            <h1>Recursos Extras e <br /> <span className="gradient-text">Personalizados</span></h1>
            <p><span style={{ fontWeight: 'bold' }}>Ferramentas inteligentes para <span className="gradient-text">potencializar o seu estudo.</span></span> <br /><br />Além dos cursos completos, você tem acesso a recursos exclusivos que tornam sua preparação ainda mais eficiente.</p>
            <NumberContainer>
              <OneCont>
                <Number>1</Number>
                <Styler>
                  <h2 className="gradient-text">Banco de questões comentadas</h2>
                  <p>Milhares de questões atualizadas com comentários didáticos, baseados nas diretrizes médicas mais recentes.</p>
                </Styler>
              </OneCont>
              <OneCont>
                <Number>2</Number>
                <Styler>
                  <h2 className="gradient-text">Flashcards inteligentes</h2>
                  <p>Recurso que aplica o método de Revisão Espaçada para fixação de conteúdos importantes de forma simples e prática.</p>
                </Styler>
              </OneCont>
              <OneCont>
                <Number>3</Number>
                <Styler>
                  <h2 className="gradient-text">Simulados adaptativos</h2>
                  <p>Simulados que se ajustam ao seu desempenho, simulando a pressão e a dinâmica das provas reais.</p>
                </Styler>
              </OneCont>
            </NumberContainer>
            <button className="superButton">QUERO CONHECER O EXTENSIVO R1!</button>
          </LeftCont>
          <RightCont>
            <ImageStyled2 src="superimg.png" alt="Marcus" />
          </RightCont>
        </Cont>
      </Container>
      <Cursos/>
    </>
  );
};

export default CursoSection;