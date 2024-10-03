import React from "react";
import styled from "styled-components";
import cafe1 from "./cafe1.jpg";
import cafe2 from "./cafe2.png";
import cafe3 from "./cafe3.jpg";
import cafe4 from "./cafe4.jpg";
import cafe5 from "./cafe5.jpg";
import cafe6 from "./cafe6.jpg";

// Styled Components
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* 1 card por linha por padrão */
  gap: 1rem;
  padding: 2rem;
  box-sizing: border-box;

  /* Media query para telas maiores que 768px e menores que 1000px (2 cards por linha) */
  @media (min-width: 768px) and (max-width: 999px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards por linha */
  }

  /* Media query para telas maiores que 1000px (3 cards por linha) */
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr); /* 3 cards por linha */
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin: 0;
`;

const CardPrice = styled.p`
  font-size: 1.1rem;
  color: #e27b36;
  margin-top: 0.5rem;
`;

const CardList = () => {
  return (
    <CardContainer>
      <Card>
        <CardImage src={cafe1} alt="Café 1" />
        <CardContent>
          <CardTitle>Café 1</CardTitle>
          <CardPrice>$9.99</CardPrice>
        </CardContent>
      </Card>
      <Card>
        <CardImage src={cafe2} alt="Café 2" />
        <CardContent>
          <CardTitle>Café 2</CardTitle>
          <CardPrice>$9.99</CardPrice>
        </CardContent>
      </Card>
      <Card>
        <CardImage src={cafe3} alt="Café 3" />
        <CardContent>
          <CardTitle>Café 3</CardTitle>
          <CardPrice>$9.99</CardPrice>
        </CardContent>
      </Card>
      <Card>
        <CardImage src={cafe4} alt="Café 4" />
        <CardContent>
          <CardTitle>Café 4</CardTitle>
          <CardPrice>$9.99</CardPrice>
        </CardContent>
      </Card>
      <Card>
        <CardImage src={cafe5} alt="Café 5" />
        <CardContent>
          <CardTitle>Café 5</CardTitle>
          <CardPrice>$9.99</CardPrice>
        </CardContent>
      </Card>
      <Card>
        <CardImage src={cafe6} alt="Café 6" />
        <CardContent>
          <CardTitle>Café 6</CardTitle>
          <CardPrice>$9.99</CardPrice>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default CardList;
