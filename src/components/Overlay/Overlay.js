import React from "react";
import styled from "styled-components";

const Overlay = ({ children, visible, className }) => (
  <Container visible={visible} className={className}>
    {children}
  </Container>
);

const Container = styled.div`
  ${props => `
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    
    background: ${props.theme.colors.primary};
    opacity: ${props.visible ? "1" : "0"};
    transform: ${props.visible ? "translateY(0)" : "translateY(-100%)"};
    transition:  opacity 0.3s ease-in-out;
    overflow-y: hidden;

    ${props.theme.mediaQueries.fromTablet} {
      grid-template-columns: repeat(12, 1fr);
    }
  `}
`;

export default Overlay;
