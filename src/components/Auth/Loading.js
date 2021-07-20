import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "@/components/Header/Logo";

export const Loading = props => (
  <Container>
    <a>
      <StyledLogo />
      <Message>
        LOADING
        <span className="ellipsis">...</span>
      </Message>
    </a>
  </Container>
);

const Container = styled.div`
  ${props => `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: ${props.theme.helpers.headerHeight}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${props.theme.margins.layoutHorizontal};
    border-bottom: 1px solid ${props.theme.colors.headerBorder};
    ${props.theme.helpers.backgroundBlur};
    z-index: 40;
  `}
`;

const StyledLogo = styled(Logo)`
  display: inline-block;
  height: 10px;
`;

const ellipsis = keyframes`
  to {
    width: 15px;    
  }
`;

const Message = styled.p`
  display: inline-block;
  margin-left: 10px;
  ${props => props.theme.typography.navigation};

  .ellipsis {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    animation: ${ellipsis} steps(4, end) 900ms infinite;
    width: 0px;
  }
`;
