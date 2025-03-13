import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ChevronDown } from "lucide-react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FAQContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px;
  width: 100%;
  
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
    padding: 0px 20px 0px 20px;
    margin-bottom: 40px;
    gap: 20px;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  line-height: 100px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

const QuestionContainer = styled.div`
  background: #202127;
  color: #fff;
  margin: 5px 0;
  padding: 22px 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background: #1f1f1f;
  }
`;

const Answer = styled.div`
  background: #1f1f1f;
  color: #ddd;
  padding: 15px;
  border-radius: 8px;
  margin-top: 5px;
  animation: ${fadeIn} 0.3s ease-out;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Sub2 = styled.div`
  font-size: 22px;
`;

const ChevronIcon = styled(ChevronDown)`
  transition: transform 0.3s ease;
  ${(props) => props.isOpen && "transform: rotate(180deg);"}
`;

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <QuestionContainer onClick={() => setIsOpen(!isOpen)}>
                {question}
                <ChevronIcon isOpen={isOpen} size={20} />
            </QuestionContainer>
            {isOpen && <Answer>{answer}</Answer>}
        </div>
    );
};

const FAQ = () => {
    const questions = [
        { question: "Como os planos de estudo são organizados na plataforma?", answer: "Os planos são organizados por módulos com conteúdo atualizado." },
        { question: "Os comentários das questões são atualizados com as novas diretrizes médicas?", answer: "Sim, todas as diretrizes médicas são atualizadas regularmente." },
        { question: "O curso Extensivo R1 atende qualquer especialidade?", answer: "Sim, ele cobre diversas especialidades médicas." },
        { question: "Como funciona o acompanhamento da mentoria?", answer: "O acompanhamento é feito com reuniões semanais e suporte exclusivo." },
    ];

    return (
        <FAQContainer>
            <Left>
                <Title className="gradient-textCut">FAQ</Title>
                <Subtitle className="gradient-text">Ainda tem dúvidas?</Subtitle>
                <Sub2>Talvez a gente já tenha a resposta.</Sub2>
            </Left>
            <Right>
                {questions.map((item, index) => (
                    <FAQItem key={index} {...item} />
                ))}
            </Right>
        </FAQContainer>
    );
};

export default FAQ;
