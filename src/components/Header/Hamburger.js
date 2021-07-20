import React from "react";
import styled from "styled-components";

function Hamburger(props) {
  return (
    <>
      <Container className={props.className}>
        <Burger open={props.open} />
      </Container>
      <ClickArea onClick={props.onClick} />
    </>
  );
}

export default Hamburger;

const Container = styled.div`
  ${props => `
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 10px;
  transition: all 0.2s ease-in-out;
`}
`;

const ClickArea = styled.div`
  position: absolute;
  right: 9px;
  top: 0;
  background: transparent;
  padding: 20px;
  cursor: pointer;
`;

const Burger = styled.div`
  ${props => `
    &,
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        transition: all 0.2s ease-in-out;
        background: #b1b0af;
    }

    &::before {
        transform: translateY(-5px);
    }
    &::after {
        transform: translateY(+5px);
    }

    transform: ${props.open ? "rotate(90deg)" : "rotate(0deg)"};

    ${props.theme.mediaQueries.fromTablet} {
      &,
      &::before,
      &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          transition: all 0.2s ease-in-out;
          background: #b1b0af;
      }
  
      &::before {
          transform: translateY(-5px);
      }
      &::after {
          transform: translateY(+5px);
      }
    }
  `}
`;
