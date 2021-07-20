import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { homeRoute } from "@/utils/routes";
import Logo from "@/components/Header/Logo";

const SimpleHeader = () => {
  return (
    <Container>
      <div>
        <Link href={homeRoute.href} passHref>
          <a>
            <StyledLogo />
          </a>
        </Link>
      </div>
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
    justify-content: space-between;
    align-items: center;
    margin-left: ${props.theme.margins.layoutHorizontal};
    ${props.theme.typography.navigation};
    ${props.theme.helpers.backgroundBlur};
    z-index: 40;
  `}
`;

const StyledLogo = styled(Logo)`
  height: 10px;
  margin-right: 25px;
`;

export default SimpleHeader;
