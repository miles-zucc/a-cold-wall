import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import { homeRoute, personaRoutes } from "@/utils/routes";
import Logo from "@/components/Header/Logo";
import { scrollToTarget } from "@/utils/common";
import useGlobalState from "@/hooks/useGlobalState";

const Header = () => {
  const router = useRouter();
  const { state } = useGlobalState();
  const { categories } = state;

  return (
    <Container>
      <Left>
        <Link href={homeRoute.href} passHref>
          <Anchor>
            <StyledLogo />
          </Anchor>
        </Link>
        {personaRoutes.map((route, index) => {
          const active = route.as === router.asPath;

          return (
            <Link
              href={route.href}
              as={route.as}
              key={`header-persona-${index}`}
            >
              <Anchor active={active}>{route.label}</Anchor>
            </Link>
          );
        })}
      </Left>

      <Right>
        {categories &&
          categories.map((category, index) => (
            <Anchor
              active
              key={`header-categories-${index}`}
              onClick={() => scrollToTarget(`#${category.title}`, 175)}
            >
              {category.title}
            </Anchor>
          ))}
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
    height: 84px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    padding: 0;
    ${props.theme.typography.navigation};
    ${props.theme.helpers.backgroundBlur};
    border-bottom: 1px solid ${props.theme.colors.headerBorder};
    z-index: 40;

    ${props.theme.mediaQueries.fromSmallDesktop} {
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      height: ${props.theme.helpers.headerHeight}px;
      padding: 0 30px;
    }
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
    flex: 1;
    width: 100%;
    height: ${props.theme.helpers.headerHeight}px;
    border-bottom: 1px solid ${props.theme.colors.headerBorder};
    padding-left: 30px;
    box-sizing: border-box;

    ${props.theme.mediaQueries.fromSmallDesktop} {
      flex: none;
      width: auto;
      height: auto;
      padding: 0;
      border-bottom: 0;
    }
  `}
`;

const Right = styled.div`
  ${props => `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    width: 100%;
    height: ${props.theme.helpers.headerHeight}px;
    padding-right: 30px;
    box-sizing: border-box;
  
    ${props.theme.mediaQueries.fromSmallDesktop} {
      flex: none;
      width: auto;
      height: auto;
      padding: 0;
    }
  `}
`;

export default Header;
