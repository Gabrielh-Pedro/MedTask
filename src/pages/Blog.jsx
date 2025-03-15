import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const moveBackground = keyframes`
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
`;

const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-image: url("/backsomos.webp");
  background-size: cover;
  background-position: center;
  animation: ${moveBackground} 10s infinite linear;
`;

const Message = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding: 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  animation: ${fadeInOut} 3s infinite;
`;

const Blog = () => {
  return (
    <>
      <BlogContainer>
        <Message>
          Nosso Blog está sendo transferido e implementado, volte mais tarde!
        </Message>
      </BlogContainer>
    </>
  );
};

export default Blog;
