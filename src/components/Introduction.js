import React from "react";
import styled from "styled-components";

import AnimateIn from "@/components/AnimateIn";

const Introduction = ({ title, body, id }) => {
  return (
    <AnimateIn delay={"0.3s"}>
      <Container id={id}>
        {title && <Title dangerouslySetInnerHTML={{ __html: title }} />}
        {body && <Paragraph dangerouslySetInnerHTML={{ __html: body }} />}
      </Container>
    </AnimateIn>
  );
};

const Container = styled.div`
  ${props => `
    grid-column: 1 / -1;
    margin-bottom: 80px;

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

const Title = styled.div``;

const Paragraph = styled.div`
  ${props => `
    ${props.theme.typography.subHeading};
  `}
`;

export default Introduction;
