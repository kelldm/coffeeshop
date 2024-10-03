import React from "react";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <IconContainer onClick={onChange}>
      {checked ? (
        <FaSun color="#fc8803" size={24} />
      ) : (
        <FaMoon color="#fc8803" size={24} />
      )}
    </IconContainer>
  );
};
