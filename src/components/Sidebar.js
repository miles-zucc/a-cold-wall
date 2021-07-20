import { useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { personaRoutes } from "@/utils/routes";
import { scrollToTarget } from "@/utils/common";
import useGlobalState from "@/hooks/useGlobalState";
import { hideSidebar } from "@/utils/state";
import useMedia from "@/hooks/useMedia";
import { withNoSSR } from "@/HOC/withNoSSR";

const Sidebar = ({ visible }) => {
  const { state, dispatch } = useGlobalState();
  const { categories } = state;
  const router = useRouter();
  const isMobile = useMedia([`(max-width: 728px)`], [true], false);

  const onClick = useCallback(title => {
    dispatch(hideSidebar());
    scrollToTarget(`#${title}`, 150);
  });

  return (
    <>
      {isMobile && (
        <Container visible={visible}>
          <Top>
            {personaRoutes.map((route, index) => {
              const active = route.as === router.asPath;

              return (
                <>
                  <Link
                    href={route.href}
                    as={route.as}
                    key={`sidebar-persona-${index}`}
                  >
                    <Anchor active={active}>{route.label}</Anchor>
                  </Link>
                  <br />
                </>
              );
            })}
          </Top>

          <Bottom>
            {categories &&
              categories.map((category, index) => (
                <>
                  <Anchor
                    active
                    key={`sidebar-categories-${index}`}
                    onClick={() => onClick(category.title)}
                  >
                    {category.title}
                  </Anchor>
                  <br />
                </>
              ))}
          </Bottom>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  ${props => `
    position: fixed;
    top: ${props.theme.margins.layoutTop};
    bottom: 0;
    left: 0;
    right: 0;
    background: ${props.theme.colors.primary};
    display: ${props.visible ? "block" : "none"};
    z-index: 999;
  `}
`;

const Top = styled.div`
  ${props => `
    padding: ${props.theme.margins.layoutHorizontal};
    box-sizing: border-box;
    border-bottom: 1px solid ${props.theme.colors.headerBorder};
    line-height: 30px;
    text-align: right;
  `}
`;

const Bottom = styled.div`
  ${props => `
    padding: ${props.theme.margins.layoutHorizontal};
    box-sizing: border-box;
    line-height: 30px;
    text-align: right;
  `}
`;

const Anchor = styled.a`
  ${props => `
    text-decoration: none;
    color: ${
      props.active ? props.theme.colors.bodyShade : props.theme.colors.bodyLight
    };
    ${props.theme.typography.navigation};
    text-transform: uppercase;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  `}
`;

export default withNoSSR(Sidebar);
