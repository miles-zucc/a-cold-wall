import React, { useEffect } from "react";
import styled from "styled-components";

import AudioPlayer from "@/components/AudioPlayer";
import AnimateIn from "@/components/AnimateIn";

const AudioNote = ({ audioTitle: title, audioBody: body, audioFile: file }) => {
  return (
    <>
      {file && (
        <AnimateIn delay="0.6s">
          <Container>
            {title ? <Title>{title}</Title> : null}
            <Paragraph>
              {body ? body : null}
              {/* <Meta>[Format {file.mimeType}]</Meta> */}
            </Paragraph>
            <AudioPlayer {...file} />
          </Container>
        </AnimateIn>
      )}
    </>
  );
};

const Container = styled.div`
  ${props => `
    grid-column: 1 / -1;
    margin-bottom: 85px;

    ${props.theme.mediaQueries.fromTablet} {
      margin-bottom: 200px;
      grid-column: 1 / 12;
    }
    ${props.theme.mediaQueries.fromSmallDesktop} {
      grid-column: 1 / 9;
    }
    ${props.theme.mediaQueries.fromLargeDesktop} {
      grid-column: 1 / 7;
    }
    ${props.theme.mediaQueries.fromHugeDesktop} {
      grid-column: 1 / 5;
    }
  `}
`;

const Title = styled.div`
  ${props => `
    ${props.theme.typography.heading};
    margin-bottom: 10px;
  `}
`;

const Paragraph = styled.div`
  margin-bottom: 35px;
`;

const Meta = styled.span`
  ${props => `
    ${props.theme.typography.caption};
    margin-left: 10px;
  `}
`;

export default AudioNote;
