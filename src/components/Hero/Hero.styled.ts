import styled, { keyframes } from "styled-components";

const planeFlight = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100px, -50px); 
  }
`;

const buttonPress = keyframes`
 0% {
    transform: scale(1);
  }
  30% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(0.85);
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

export const Plane = styled.div`
  animation: ${planeFlight} 3s ease-in-out infinite alternate;
`;

export const ButtonPress = styled.button`
  border: none;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:active {
    animation: ${buttonPress} 0.5s ease forwards;
  }
`;
