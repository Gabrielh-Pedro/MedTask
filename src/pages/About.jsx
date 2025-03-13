import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaAlignRight, FaBook, FaBrain, FaChargingStation, FaChevronDown, FaGripLinesVertical, FaHandMiddleFinger, FaIceCream, FaLine, FaPencilAlt, FaPersonBooth, FaSuperpowers, FaUser, FaUserTimes } from "react-icons/fa";
import { scroller } from "react-scroll";

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
  background-image: url("/backsomos.webp");
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
  gap: 20px;
  padding: 80px 0px 0px 0px;

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
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const ImageStyled2 = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Vetor = styled.img`
  width: 100%;
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

const Container5 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 50px 150px;
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

    h1, .gradient-textCut {
      font-size: 40px;
      line-height: 40px;
    }

  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 50px 150px;
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

    h1, .gradient-textCut {
      font-size: 40px;
      line-height: 40px;
    }

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

const TopArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
    text-align: center;
    padding: 0px 20px 0px 20px;
    gap: 20px;
  }

`;

const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
    padding: 0px 20px 0px 20px;
    gap: 0px;
  }
`;

const RightInfo = styled.div`
  display: flex;
  width: 50%;
`;

const MedCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: 80px auto;

  button {
    width: 40%;
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

    button {
    width: 100%;
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

const About = () => {
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
            Aprovação não é sobre decorar conteúdo. É sobre entender <span className="gradient-text">o caminho certo</span>
          </h1>
          <h2>
            Por trás de cada conquista há um método. E, por trás do método MedTask, há uma equipe apaixonada pelo ensino médico.
          </h2>
          <button className="superButton">CONHEÇA NOSSO MÉTODO!</button>
        </LeftCont1>
        <RightCont1>
          <ImageStyled src="Marcus2.webp" alt="Marcus" />
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
          Acreditamos na <br /><span className="gradient-textCut">medicina feita com dedicação.</span><br /> E na preparação feita com inteligência
        </h1>
        <p>
          Nossos pilares refletem nosso compromisso com a sua aprovação.
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
              <FaPencilAlt />
            </IconTemplate>
            <CardTitle>Personalização</CardTitle>
            <p>Cada aluno é único. Por isso, adaptamos o plano de estudos conforme sua curva de aprendizado e ritmo pessoal.</p>
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
              <FaSuperpowers />
            </IconTemplate>
            <CardTitle>Eficiência</CardTitle>
            <p>Tempo é precioso. Aplicamos métodos neurocientíficos para garantir que você retenha mais conteúdo com menos desgaste.</p>
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
              <FaUser />
            </IconTemplate>
            <CardTitle>Humanização</CardTitle>
            <p>Sabemos que a preparação não é só técnica. Nossos mentores oferecem apoio psicológico e estratégico para que você chegue confiante no dia da prova.</p>
          </Card>
        </CardsContainer>
      </Container>
      <Container>
        <TopArea>
          <LeftInfo>
            <h1>
              Aprenda com quem já <span className="gradient-textCut">chegou onde você quer chegar!</span>
            </h1>
            <p>Nossa equipe é formada por médicos experientes, que conhecem os desafios das provas de residência médica</p>
          </LeftInfo>
          <RightInfo>
            <Vetor src="vetor.png" alt="Marcus" />
          </RightInfo>
        </TopArea>
        <MedCardContainer>
          <MedCard $primary>
            <List>
              <Title>
                <FaGripLinesVertical />
                <NameTitle>Dra. Karin Chiaradia</NameTitle>
              </Title>
              <p>Médica assistente da USP e especialista em oftalmologia. Sua paixão pelo ensino e abordagem didática fazem dela uma referência para os estudantes.</p>
            </List>
          </MedCard>
          <MedCard $secondary>
            <List2>
              <Title>
                <FaGripLinesVertical />
                <NameTitle>Dr. Marcus Vinicius Takatsu</NameTitle>
              </Title>
              <p>Chefe do Pronto-Socorro da Santa Casa de São Paulo, reconhecido pela experiência prática e orientações aplicadas ao dia a dia médico.</p>
            </List2>
          </MedCard>
          <MedCard $triple>
            <List>
              <Title>
                <FaGripLinesVertical />
                <NameTitle>Dra. André Moraes</NameTitle>
              </Title>
              <p>Chefe do Pronto-Socorro da Santa Casa de São Paulo, reconhecido pela experiência prática e orientações aplicadas ao dia a dia médico.</p>
            </List>
          </MedCard>
          <button className="superButton">CONHEÇA TODOS OS PROFESSORES</button>
        </MedCardContainer>
      </Container>
      <Container5>
          <LeftCont>
            <IconVetor src="iconvetor.png" alt="Marcus" />
            <h1>Seu sucesso é a <span className="gradient-text">nossa missão</span></h1>
            <h2>E não medimos esforços para entregar a melhor preparação do médica do Brasil!</h2>
            <p>Entendemos o que significa se dedicar a um sonho. Sabemos o peso de conciliar estudos, plantões e vida pessoal. Por isso, investimos continuamente em tecnologia, treinamento docente e suporte personalizado. <br /><br />
              Nosso compromisso é simples: entregar uma preparação de excelência, baseada em ciência e construída com humanidade</p>
            <button className="superButton">QUERO FAZER PARTE DESSA HISTÓRIA!</button>
          </LeftCont>
          <RightCont>
            <ImageStyled2 src="nootebokmapa.webp" alt="Marcus" />
          </RightCont>
      </Container5>
    </>
  );
};

export default About;