import styled from "styled-components";
import AnimateIn from "@/components/AnimateIn";
import VideoButton from "./VideoButton";

const Video = ({ file, delay, className }) => (
  <>
    {file && (
      <AnimateIn delay={delay || "0.1s"}>
        <StyledImage
          className={className}
          src={file.sourceUrl ? file.sourceUrl : null}
          muted
          autoPlay
          loop
        />
      </AnimateIn>
    )}
  </>
);

const StyledImage = styled.video`
  ${props => `
    width: 100%;
    height: auto;
    vertical-align: top;
  `}
`;

export default Video;
