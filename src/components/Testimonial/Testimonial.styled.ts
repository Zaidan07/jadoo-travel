// components/FadeTransition.tsx
import styled from 'styled-components';

interface FadeDivProps {
  isVisible: boolean;
}

const FadeDiv = styled.div<FadeDivProps>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 500ms ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

export default FadeDiv;
