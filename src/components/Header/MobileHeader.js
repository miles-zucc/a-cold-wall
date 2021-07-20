import React, { useCallback } from "react";
import Link from "next/link";
import styled from "styled-components";

import { homeRoute } from "@/utils/routes";
import Logo from "@/components/Header/Logo";
import useGlobalState from "@/hooks/useGlobalState";
import Hamburger from "@/components/Header/Hamburger";
import { showSidebar, hideSidebar } from "@/utils/state";

const MobileHeader = () => {
  const { state, dispatch } = useGlobalState();
  const { sidebarVisible } = state;

  // When user clicks on the hamburger, update state
  const onClick = useCallback(() => {
    dispatch(sidebarVisible ? hideSidebar() : showSidebar());
  }, [sidebarVisible, dispatch]);

  return (
    <Container>
      <Left>
        <Link href={homeRoute.href} passHref>
          <Anchor>
            <StyledLogo />
          </Anchor>
        </Link>
      </Left>

      <Right>
        <Hamburger onClick={onClick} open={sidebarVisible} />
      </Right>
    </Container>
  );
};

const Container = styled.div`
  ${props => `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: ${props.theme.helpers.headerHeight}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${props.theme.margins.layoutHorizontal};
    ${props.theme.typography.navigation};
    ${props.theme.helpers.backgroundBlur};
    border-bottom: 1px solid ${props.theme.colors.headerBorder};
    z-index: 40;
  `}
`;

const StyledLogo = styled(Logo)`
  height: 10px;
  margin-right: 25px;
`;

const Anchor = styled.a`
  ${props => `
    text-decoration: none;
    color: ${
      props.active ? props.theme.colors.bodyShade : props.theme.colors.bodyLight
    };
    ${props.theme.typography.navigation};
    text-transform: uppercase;
    &:not(:last-of-type) {
      margin-right: 10px;
    }
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  `}
`;

const Left = styled.div`
  ${props => `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: ${props.theme.margins.layoutHorizontal};
    box-sizing: border-box;
  `}
`;

const Right = styled.div`
  ${props => `
    // align-items: center;
    // justify-content: flex-end;
    // padding: 0 ${props.theme.margins.layoutHorizontal};
    // box-sizing: border-box;
  `}
`;

export default MobileHeader;
