import React from "react";
import styled from "styled-components";

import Overlay from "@/components/Overlay/Overlay";

const ImageOverlay = ({ title, body, file, visible, setOverlay }) => (
  <Overlay visible={visible}>
    <Container>
      <Text>
        {title && <Title>{title}</Title>}
        {body && <div dangerouslySetInnerHTML={{ __html: body }} />}
      </Text>
      <Anchor onClick={() => setOverlay(false)}>CLOSE</Anchor>
    </Container>

    {file && (
      <Image
        src={file.sourceUrl ? file.sourceUrl : "/placeholder.jpg"}
        srcSet={file.srcSet ? file.srcSet : null}
        sizes={file.sizes ? file.sizes : null}
      />
    )}
  </Overlay>
);

const Container = styled.div`
  ${props => `
    grid-column: 1 / -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: ${props.theme.margins.layoutHorizontal};
    text-align: right;
    z-index: 10;
  `}
`;

const Text = styled.div`
  ${props => `
    width: 100%:
    margin: ${props.theme.margins.layoutHorizontal};

    ${props.theme.mediaQueries.fromTablet} {
      width: 60%;
    }
  `}
`;

const Title = styled.div`
  margin-bottom: 10px;
`;

const Image = styled.img`
  grid-column: 1 / -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export default ImageOverlay;
