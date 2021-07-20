import React from "react";
import styled from "styled-components";
import useGlobalState from "@/hooks/useGlobalState";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const { state } = useGlobalState();
  const { sidebarVisible } = state;

  return (
    <Container>
      <Inner>{children}</Inner>
      <Sidebar visible={sidebarVisible} />
    </Container>
  );
};

const Container = styled.div`
  ${props => `
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 ${props.theme.margins.layoutHorizontal};
  `}
`;

// If you want a grid-item to not have the 15px margin you can give it this style:
//    margin: 0 -15px;

const Inner = styled.div`
  ${props => `
    flex: 1;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    
    ${props.theme.mediaQueries.fromTablet} {
      grid-template-columns: repeat(12, 1fr);
    }
  
  `}
`;

export default Layout;
