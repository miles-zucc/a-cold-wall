import styled from "styled-components";
import AnimateIn from "@/components/AnimateIn";

const Image = ({ file, delay, className }) => (
  <>
    {file && (
      <AnimateIn delay={delay || "0.1s"}>
        <StyledImage
          className={className}
          src={file.sourceUrl ? file.sourceUrl : "/placeholder.jpg"}
          srcSet={file.srcSet ? file.srcSet : null}
          sizes={file.sizes ? file.sizes : null}
        />
      </AnimateIn>
    )}
  </>
);

const StyledImage = styled.img`
  ${props => `
    width: 100%;
    height: auto;
    vertical-align: top;
  `}
`;

export default Image;
