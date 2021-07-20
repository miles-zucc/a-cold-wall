import styled from "styled-components";

export const Container = styled.div`
  ${props => `

    grid-column: 1 / -1;
    margin-top: 100px;
    margin-left: ${props.theme.margins.layoutHorizontal};
    margin-right: ${props.theme.margins.layoutHorizontal};

    ${props.theme.mediaQueries.fromTablet} {
      grid-column: 1 / 7;
    }
  `}
`;

export const Heading = styled.h1`
  ${props => props.theme.typography.heading}
  margin-bottom: 35px;
  font-weight: normal;
`;

export const SubHeading = styled.h1`
  ${props => props.theme.typography.subheading}
  margin-bottom: 10px;
  font-weight: normal;
`;

export const Paragraph = styled.div`
  ${props => props.theme.typography.navigation}
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 30px;
`;

export const Link = styled.a`
  ${props => `
    display: block;
    ${props.theme.typography.navigation}
    color: ${props.theme.colors.body};
    text-decoration: none;
  `};
`;

export const DownloadLink = styled(Link)`
  text-transform: uppercase;
  font-size: 15px;
`;

export const Spacer = styled.div`
  margin-top: 50px;
`;
