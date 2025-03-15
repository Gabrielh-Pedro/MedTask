import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 100px 150px 0px 150px;
  background-image: url("/back1.webp");
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

const PrivacyContainer = styled.div`
  max-width: 1200px;
  padding: 40px;
  border-radius: 15px;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px;
  }
`;

const Title = styled(motion.h1)`
  color: #2c3e50;
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Section = styled.div`
  margin-bottom: 5px;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
`;

const Subtitle = styled(motion.h2)`
  color: #34495e;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Paragraph = styled(motion.p)`
  color: #666;
  line-height: 1.8;
  font-size: 16px;
`;

const Politica = () => {
  return (
    <Container>
    <PrivacyContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      {[ 
        { title: "1. Introdução", text: "Bem-vindo à MedTask. Valorizamos sua privacidade e nos comprometemos a proteger seus dados pessoais." },
        { title: "2. Coleta de Dados", text: "Coletamos informações fornecidas por você ao se cadastrar, como nome, e-mail e CPF, além de dados gerados pelo uso da plataforma." },
        { title: "3. Uso das Informações", text: "Utilizamos seus dados para fornecer e aprimorar nossos serviços, enviar comunicados e garantir a segurança da plataforma." },
        { title: "4. Compartilhamento de Dados", text: "Seus dados não são vendidos ou compartilhados com terceiros sem consentimento, exceto quando exigido por lei." },
        { title: "5. Segurança e Armazenamento", text: "Implementamos medidas de segurança para proteger suas informações contra acessos não autorizados." },
        { title: "6. Direitos do Usuário", text: "De acordo com a LGPD, você pode acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento." },
        { title: "7. Contato", text: "Para dúvidas ou solicitações, entre em contato pelo e-mail: contato@medtask.com" }
      ].map((item, index) => (
        <Section
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Subtitle>{item.title}</Subtitle>
          <Paragraph>{item.text}</Paragraph>
        </Section>
      ))}
    </PrivacyContainer>
    </Container>
  );
};

export default Politica;
