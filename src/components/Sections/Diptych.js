import React from "react";
import styled from "styled-components";

import { Media } from "@/utils/common";

const Diptych = ({ title, body, link, files, id }) => {
  return (
    <Container id={id}>
      {files &&
        files.map((item, index) => (
          <StyledMedia
            mediaType={item.file.mediaType}
            file={item}
            index={index}
          />
        ))}

      {title && <Title>{title}</Title>}
      {body && <Paragraph dangerouslySetInnerHTML={{ __html: body }} />}
      {link && link.url && (
        <LinkContainer>
          <Anchor
            href={link.url ? link.url : "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </Anchor>
        </LinkContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  ${props => `
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    margin: 0 -${props.theme.margins.layoutHorizontal};
    margin-bottom: 55px;

    ${props.theme.mediaQueries.fromTablet} {
      grid-template-columns: repeat(12, 1fr);
      margin-bottom: 125px;
    }
    ${props.theme.mediaQueries.fromSmallDesktop} {
      margin-bottom: 195px;
    }
    ${props.theme.mediaQueries.fromLargeDesktop} {
      margin-bottom: 145px;
    }
  `}
`;

const Title = styled.div`
  ${props => `
    grid-column: 1 / -1;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: ${props.theme.margins.layoutHorizontal};
    margin-right: ${props.theme.margins.layoutHorizontal};
    text-transform: uppercase;
  `}
`;

const StyledMedia = styled(Media)`
  ${props => `
    grid-column: span 4;

    ${props.theme.mediaQueries.fromTablet} {
      grid-column: span 6;
    }
  `}
`;

const Paragraph = styled.div`
  ${props => `
    grid-column: 1 / -1;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: ${props.theme.margins.layoutHorizontal};
    margin-right: ${props.theme.margins.layoutHorizontal};

    ${props.theme.mediaQueries.fromTablet} {
      grid-column: 1 / 6;
    }
  `}
`;

const LinkContainer = styled.div`
  ${props => `
    grid-column: 1 / -1;
    margin-right: ${props.theme.margins.layoutHorizontal};
    margin-left: ${props.theme.margins.layoutHorizontal};
    
    ${props.theme.mediaQueries.fromTablet} {
      grid-column: 1 / 6;
    }
  `}
`;

const Anchor = styled.a`
  ${props => `
    margin-top: 10px;
    margin-bottom: 10px;
    ${props.theme.typography.navigation};
    color: ${props.theme.colors.body};
    text-transform: uppercase;
    cursor: pointer;
    
    text-decoration: none;
    border-bottom: solid 1px ${props.theme.colors.body}
  `}
`;

export default Diptych;
