import React from "react";
import styled from "styled-components";

import { Media } from "@/utils/common";

const Gallery = ({ title, body, link, files, reverse, id }) => {
  if (!files) return null;

  const [firstMediaItem, ...mediaItems] = files;

  return (
    <Container id={id}>
      {files && (
        <>
          <FirstMediaItem reverse={reverse}>
            <Media
              mediaType={firstMediaItem.file.mediaType}
              file={firstMediaItem}
            />
          </FirstMediaItem>
          <ImagesContainer reverse={reverse}>
            {mediaItems.map((item, index) => (
              <div key={`gallery-${index}`}>
                <Media
                  mediaType={item.file.mediaType}
                  file={item}
                  index={index}
                />
              </div>
            ))}
          </ImagesContainer>
        </>
      )}

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

const FirstMediaItem = styled.div`
  ${props => `
    grid-column: ${props.reverse ? "5 / -1" : "1 / 5"};
    grid-row: 1;

    ${props.theme.mediaQueries.fromTablet} {
      grid-column: ${props.reverse ? "7 / -1" : "1 / 7"};
    }
  `}
`;

const ImagesContainer = styled.div`
  ${props => `
    grid-column: ${props.reverse ? "1 / 5" : "5 / -1"};
    display: flex;
    flex-wrap: wrap;
    grid-row: 1;

    div {
      flex-basis: 50%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    ${props.theme.mediaQueries.fromTablet} {
      grid-column: ${props.reverse ? "1 / 7" : "7 / -1"};
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

export default Gallery;
