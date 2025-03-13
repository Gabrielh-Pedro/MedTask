import React, { useState } from "react";
import styled from "styled-components";
import { FaUser, FaPhone, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 110%;
  }

`;

const FormWrapper = styled.div`
  padding: 30px;
  width: 600px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  button {
    margin-top: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  color: #626262;
  padding: 0px;
  border-radius: 0px;
`;

const Icon = styled.span`
  margin-right: 10px;
  color: #626262;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  font-weight: bold;
  border: none;
  background: #d9d9d9;
  outline: none;
  font-family: 'Bai Jamjuree', sans-serif !important;
  color: #626262;
  font-size: 16px;
  &::placeholder {
    color: #626262;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px;
  border: none;
  outline: none;
  background: #d9d9d9;
  font-weight: bold;
  color: white;
  font-family: 'Bai Jamjuree', sans-serif !important;
  font-size: 16px;
  resize: none;
  height: 100px;
  border-bottom-right-radius: 40px;
  &::placeholder {
    color: #626262;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #ff7eb3, #ff758c);
  color: white;
  font-size: 18px;
  padding: 12px;
  border: none;
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 0.3s;
  &:hover {
    background: linear-gradient(135deg, #ff758c, #ff7eb3);
    transform: scale(1.05);
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const webhookUrl = "https://hooks.zapier.com/hooks/catch/21786436/2gctxs4/";
  
    const response = await fetch(webhookUrl, {
      method: "POST",
      body: JSON.stringify(formData), // Zapier processa JSON mesmo sem o header
    });
  
    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      setFormData({ nome: "", telefone: "", email: "", mensagem: "" });
    } else {
      alert("Erro ao enviar mensagem. Tente novamente!");
    }
  };
  return (
    <FormContainer>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
          </InputGroup>

          <InputGroup>
            <Input type="tel" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required />
          </InputGroup>

          <InputGroup>
            <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
          </InputGroup>

          <InputGroup>
            <TextArea name="mensagem" placeholder="Sua Mensagem" value={formData.mensagem} onChange={handleChange} required />
          </InputGroup>
          <button className="superButton" type="submit">ENVIAR MENSAGEM!</button>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
};

export default ContactForm;
