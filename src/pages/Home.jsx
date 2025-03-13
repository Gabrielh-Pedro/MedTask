import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaBook, FaBrain, FaChevronDown, FaIceCream, FaUserTimes } from "react-icons/fa";
import { scroller } from "react-scroll";
import HomeSlack from "../components/HomeSlack";

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
  background-image: url("/back1.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
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
  position: relative;
  width: 50%;
  height: 100%;
  
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 0px 0px 0px 0px;
    margin-top: 0px;
    gap: 0px;
  }

`;

const ImageStyled = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const ImageSections = styled.img`
  width: 50%;
  animation: ${floating} 2s ease-in-out infinite;
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
  background-color: #000F2D;

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
  height: 450px;
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
    margin-top: 80px;
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
    padding: 0px 20px 0px 20px;
    margin-top: 50px;
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

const Home = () => {
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
            Milhares de médicos disputam as mesmas vagas de Residência.
            <span className="gradient-text">O que vai te diferenciar?</span>
          </h1>
          <h2>
            Aprovação não é questão de sorte. É estratégia. Com o nosso método que mais aprova, sua preparação se torna clara, eficiente e direcionada.
          </h2>
          <button className="superButton">COMECE SUA PREPARAÇÃO AGORA!</button>
        </LeftCont1>
        <RightCont1>
          <ImageStyled src="Marcus1.webp" alt="Marcus" />
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
          Estudar sem estratégia é como <span className="gradient-textCut">navegar sem bússola.</span>
        </h1>
        <p>
          Você se identifica com esses desafios? A maioria dos candidatos reprovados enfrenta pelo menos um deles.
        </p>
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
              <FaBrain />
            </IconTemplate>
            <CardTitle>Memória que falha na hora da prova</CardTitle>
            <p>Estudar sem revisar de forma adequada dificulta a retenção. Nosso método aplica a Revisão Espaçada, comprovada pela neurociência, para que você chegue ao dia da prova com confiança.</p>
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
              <FaBook />
            </IconTemplate>
            <CardTitle>Estudo sem direção clara</CardTitle>
            <p>Com tantas apostilas, vídeos e simulados, é fácil se perder. Nossa IA ajusta seu cronograma automaticamente, garantindo foco no que realmente importa.</p>
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
              <FaUserTimes />
            </IconTemplate>
            <CardTitle>Dificuldade em conciliar estudo e rotina</CardTitle>
            <p>Estudar, trabalhar e manter a vida pessoal exige organização. Por isso, desenvolvemos uma plataforma simples e intuitiva, que facilita seu dia a dia e otimiza o tempo.</p>
          </Card>
          <button className="superButton">DESCUBRA COMO O MÉTODO MEDTASK PODE TE AJUDAR!</button>
        </CardsContainer>
      </Container>
      <Container>
        <h1>
          Conheça os pilares que tornam a MedTask referência em <span className="gradient-textCut">preparação médica:</span>
        </h1>
      </Container>
      <ContainerScroll>
        <Section>
          <LeftSection>
            <h1>Inteligência Artificial<br></br><span className="gradient-textCut">Personalizada</span></h1>
            <p>A IA analisa seu desempenho e ajusta automaticamente o plano de estudos para otimizar sua preparação.</p>
            <button className="superButton">QUERO UMA PREPARAÇÃO INTELIGENTE!</button>
          </LeftSection>
          <RightSection>
            <ImageSections src="image1.png" alt="Marcus" />
          </RightSection>
        </Section>
        <Section>
          <LeftSection>
            <h1>Método<br></br><span className="gradient-textCut"> Neurocientífico</span></h1>
            <p>Aplicamos técnicas comprovadas, como Revisão Espaçada e Prática Ativa, para garantir maior retenção de conteúdo.</p>
            <button className="superButton">QUERO UMA PREPARAÇÃO INTELIGENTE!</button>
          </LeftSection>
          <RightSection>
            <ImageSections src="image2.png" alt="Marcus" />
          </RightSection>
        </Section>
        <Section>
          <LeftSection>
            <h1>Banco de<br></br><span className="gradient-textCut"> Questões Comentadas</span></h1>
            <p>Não basta resolver questões, é preciso entender o raciocínio. Nosso banco inclui +45 mil questões com comentários didáticos.</p>
            <button className="superButton">QUERO UMA PREPARAÇÃO INTELIGENTE!</button>
          </LeftSection>
          <RightSection>
            <ImageSections src="image3.png" alt="Marcus" />
          </RightSection>
        </Section>
        <Section>
          <LeftSection>
            <h1>Mentoria<br></br><span className="gradient-textCut"> Individualizada</span></h1>
            <p>Orientação prática e suporte emocional com profissionais experientes, que já enfrentaram as mesmas provas que você.</p>
            <button className="superButton">QUERO UMA PREPARAÇÃO INTELIGENTE!</button>
          </LeftSection>
          <RightSection>
            <ImageSections src="image4.png" alt="Marcus" />
          </RightSection>
        </Section>
      </ContainerScroll>
      <HomeSlack />
    </>
  );
};

export default Home;