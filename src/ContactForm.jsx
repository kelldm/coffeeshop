import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espaço entre os elementos */
  max-width: 400px;
  margin: 0 auto; /* Centraliza o formulário */
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #e27b36;
  }
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #e27b36;
  }
`;

const Button = styled.button`
  background-color: ${({ primary }) => (primary ? "#e27b36" : "#333")};
  color: ${({ primary }) => (primary ? "#fff" : "#e27b36")};
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#c1672d" : "#444")};
  }
`;

const ContactForm = () => {
  return (
    <Form>
      <Input type="text" placeholder="Nome" />
      <Input type="email" placeholder="Email" />
      <Textarea placeholder="Mensagem"></Textarea>
      <Button primary size="medium" onClick={() => alert("Mensagem enviada!")}>
        Enviar
      </Button>
    </Form>
  );
};

export default ContactForm;
