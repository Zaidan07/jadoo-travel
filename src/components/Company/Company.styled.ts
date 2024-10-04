import styled from 'styled-components';
import Image from 'next/image';

export const LogoImage = styled(Image).attrs({
  width: 162,
  height: 32, 
  layout: 'fixed',
  objectFit: 'contain',
})`
  filter: grayscale(100%);
  transition: filter 0.2s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;
