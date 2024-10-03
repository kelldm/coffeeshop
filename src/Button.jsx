import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "#fc8803" : "#fc8803")};
  color: white;
  padding: ${(props) => (props.size === "large" ? "15px 30px" : "10px 20px")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e27b36;
  }

  &:active {
    background-color: #c1672d;
  }
`;

export const Button = ({ primary, size, children, onClick }) => {
  return (
    <StyledButton primary={primary} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
