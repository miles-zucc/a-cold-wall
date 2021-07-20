import React from "react";
import styled from "styled-components";

import AnimateIn from "@/components/AnimateIn";

const Heading = ({ title, body, id }) => {
  return (
    <>
      {title && (
        <AnimateIn>
          <Title id={id}>{title}</Title>
        </AnimateIn>
      )}
      {body && (
        <AnimateIn delay="0.2s" y="150px">
          <Wrapper>
            <Paragraph dangerouslySetInnerHTML={{ __html: body }} />
          </Wrapper>
        </AnimateIn>
      )}
    </>
  );
};

const Title = styled.div`
  ${props => `
    grid-column: 1 / -1;
    margin-bottom: 35px;
    ${props.theme.typography.heading};
  `}
`;

const Wrapper = styled.div`
  ${props => `
    grid-column: 1 / -1;
    ${props.theme.typography.subHeading};

    ${props.theme.mediaQueries.fromTablet} {
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

const Paragraph = styled.div`
  ${props => `
    margin-bottom: 50px;

    ${props.theme.mediaQueries.fromTablet} {
      margin-bottom: 85px;
    }
    ${props.theme.mediaQueries.fromLargeDesktop} {
      margin-bottom: 150px;
    }
  `}
`;

export default Heading;
