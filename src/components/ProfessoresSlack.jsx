import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaBook, FaBrain, FaChevronDown, FaIceCream, FaUserTimes } from "react-icons/fa";
import { scroller } from "react-scroll";

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 2;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  background-image: url("/cursos.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    background-image: url("/mobile.webp");
    padding-bottom: 600px;
  }
`;

const LeftCont1 = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: 100px;
  gap: 20px;
  padding: 80px 100px;
  text-align: center;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    flex-direction: column;
    text-align: center;
    padding: 0px 20px 0px 20px;
    margin-bottom: 40px;
    gap: 20px;
  }
`;

const ImageStyled = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfessoresSlack = () => {

  return (

    <HomeContainer>
      <ImageStyled src="persons.webp" alt="Marcus" />
      <LeftCont1>
        <h1>
          Preparado(a) para o<br />
<span className="gradient-text"> próximo passo?</span>
        </h1>
        <p>
        Converse com nossa equipe e descubra como a MedTask pode te levar até a aprovação.
        </p>
        <button className="superButton">FALAR COM UM ESPECIALISTA AGORA!</button>
      </LeftCont1>
    </HomeContainer>
  );
};

export default ProfessoresSlack;