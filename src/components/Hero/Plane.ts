import styled, { keyframes } from 'styled-components';

// Definisikan keyframes animasi
const planeFlight = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100px, -50px); 
  }
`;

export const Plane = styled.div`
  animation: ${planeFlight} 3s ease-in-out infinite alternate;
`;
