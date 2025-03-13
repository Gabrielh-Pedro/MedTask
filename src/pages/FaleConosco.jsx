import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaAlignRight, FaBook, FaBrain, FaChargingStation, FaChevronDown, FaEnvelope, FaFacebook, FaFileContract, FaGripLinesVertical, FaHandMiddleFinger, FaIceCream, FaInstagram, FaLine, FaNetworkWired, FaPencilAlt, FaPersonBooth, FaStaylinked, FaSuperpowers, FaUser, FaUserTimes, FaVoicemail, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { scroller } from "react-scroll";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  height: auto;
  background-image: url("/backquem.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
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

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`;

const ImageStyled2 = styled.img`
  width: 100%;
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
  background-color: ${(props) => (props.$primary ? '#d9d9d9' : '#000F2D')} ;

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

const LayerArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const FaleConosco = () => {

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
              Entre em contato com nossa equipe e saiba como a <span className="gradient-text">MedTask pode te ajudar a conquistar sua aprovação</span>
            </h1>
            <p>Sabemos que a preparação para a residência médica levanta muitas dúvidas. Seja para entender melhor nossos cursos, saber mais sobre a metodologia ou resolver questões administrativas, estamos prontos para te atender. Nosso time está disponível para te orientar de forma objetiva, direta e sempre com o cuidado que sua trajetória merece.</p>
            <button className="superButton">ENTRE EM CONTATO AGORA!</button>
          </LeftCont1>
          <RightCont1>
            <ImageStyled src="marcus.webp" alt="Marcus" />
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
            <h1>Fale com a MedTask e dê o próximo passo <br /> <span className="gradient-text"> da sua jornada!</span></h1>
            <p><span style={{ fontWeight: 'bold' }}>Sabemos que a preparação para a residência médica pode trazer muitas dúvidas</span>, mas você não precisa enfrentá-las sozinho!
              <br /><br /> Nossa equipe está pronta para esclarecer tudo sobre os cursos, explicar nossa metodologia exclusiva e oferecer suporte em qualquer etapa do seu processo.</p>
            <button className="superButton">QUERO CONHECER O EXTENSIVO R1!</button>
          </LeftCont>
          <RightCont>
            <ImageStyled2 src="imagem2.webp" alt="Marcus" />
          </RightCont>
        </Cont>
      </Container>
      <Container name='next-section'>
        <Cont>
          <Center>
            <h1>Preencha o formulário e <br /> <span className="gradient-textCut">fale com a gente!</span></h1>
            <p>Respeitamos a sua privacidade. Suas informações serão utilizadas exclusivamente para responder à sua solicitação.</p>
            <ContactForm />
          </Center>
        </Cont>
      </Container>
      <Container $primary>
        <Cont>
          <LeftCont>
            <h1 style={{color: 'black'}}>Prefere um contato mais direto? <br /> <span className="gradient-textCut"> Veja outras opções.</span></h1>
            <p style={{color: 'black'}}>Escolha a forma mais convêniente para falar conosco.</p>
            <LayerArea>
              <h2 style={{color: 'black'}}><FaWhatsapp style={{marginRight: '10px'}}></FaWhatsapp>Whatsapp</h2>
              <p style={{color: 'black'}}><span style={{fontWeight: 'bold', color: 'black'}}>(00) 00000-0000</span> - Atendimento rápido e direto com nossa equipe.</p>
            </LayerArea>
            <LayerArea>
              <h2 style={{color: 'black'}}><FaEnvelope style={{marginRight: '10px'}}/>E-mail</h2>
              <p style={{color: 'black'}}><span style={{fontWeight: 'bold', color: 'black'}}>example@medtask.com.br</span> - Respondemos em até 24 horas úteis.</p>
            </LayerArea>
            <LayerArea>
              <h2 style={{color: 'black'}}><FaNetworkWired style={{marginRight: '10px'}}/>Redes Sociais</h2>
              <p style={{color: 'black'}}>Acompanhe nossos conteúdos e entre em contato via Instagram, Facebook e YouTube.</p>
              <div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center', marginTop: '10px', gap: '10px', fontSize: '30px', color: 'black'}}>
                <FaInstagram/>
                <FaFacebook/>
                <FaYoutube/>
              </div>
            </LayerArea>
          </LeftCont>
          <RightCont>
            <ImageStyled2 src="imagem.webp" alt="Marcus" />
          </RightCont>
        </Cont>
        <FAQ/>
      </Container>
      <Contact/>
    </>
  );
};

export default FaleConosco;