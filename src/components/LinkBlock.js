import React from "react";
import Link from "next/link";
import styled from "styled-components";

import AnimateIn from "@/components/AnimateIn";

const LinkBlock = ({ text, url }) => {
  return (
    <AnimateIn blur>
      <Container>
        <Link href={url ? url : "#"}>
          <Anchor>{text ? text : null}</Anchor>
        </Link>
      </Container>
    </AnimateIn>
  );
};

const Container = styled.div`
  grid-column: 1 / -1;
`;

const Anchor = styled.a`
  ${props => `
    height: 420px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: ${props.theme.colors.primary};
    ${props.theme.typography.navigation};
    text-decoration: underline;
    text-transform: uppercase;
    cursor: pointer;

    ${props.theme.mediaQueries.fromTablet} {
      height: 750px;
    }
  `}
`;

export default LinkBlock;
