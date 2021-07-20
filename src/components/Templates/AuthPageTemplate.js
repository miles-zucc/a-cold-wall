import styled from "styled-components";

export const Container = styled.div`
  ${props => `
    grid-column: 1 / -1;
    margin-top: 100px;
    margin-left: 10px;
    margin-right: 10px;

    ${props.theme.mediaQueries.fromTablet} {
      grid-column: 1 / 7;
    }
    ${props.theme.mediaQueries.fromSmallDesktop} {
      grid-column: 1 / 5;
    }
  `}
`;

export const Title = styled.h1`
  ${props => `
      margin-bottom: 25px;
  `}
`;

export const Body = styled.div`
  ${props => `
    ${props.theme.typography.regular};
    margin-bottom: 15px;
  `}
`;

export const Anchor = styled.a`
  ${props => `
    ${props.theme.typography.navigation};
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom: solid 1px ${props.theme.colors.body}
  `}
`;

export const Button = styled.p`
  ${props => `
    padding: 2.5px 5px;
    background: ${props.theme.colors.body};
    color: ${props.theme.colors.bodyInverted};
    ${props.theme.typography.navigation};
    cursor: pointer;

    &:hover {
      background-color: ${props.theme.colors.buttonHover};
    }

  `}
`;
