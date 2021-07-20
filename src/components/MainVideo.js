import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import VideoPlayer from "@/components/VideoPlayer";
import AnimateIn from "@/components/AnimateIn";
import DownArrow from "@/components/Icons/DownArrow";
import useVideoPlay from "@/hooks/useVideoPlay";

const Video = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    useVideoPlay(videoRef.current);
  }, []);

  return (
    <>
      <AnimateIn>
        <VideoWrapper>
          <VideoPlayer
            ref={videoRef}
            src={"/intro_placeholder.mp4"}
            disableControls={false}
            playsInline
            loop
          />
          <StyledDownArrow />
        </VideoWrapper>
      </AnimateIn>
    </>
  );
};

const VideoWrapper = styled.div`
  ${props => `
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100wv;
    height: 100vh;
    grid-column: 1 / -1;
    margin: 0 -${props.theme.margins.layoutHorizontal};
    overflow: hidden;

    .video-react-video {
      position: absolute;
      left: 50%;
      top: 0;
      right: 0;
      height: 100%;
      transform: translateX(-50%);
      outline: none;
    }
    .video-react:first-child {
      z-index: 1;
    }

    .video-react .video-react-control-bar {
      display: flex;
    }
  `}
`;

const StyledDownArrow = styled(DownArrow)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 21px;
  height: 11px;
  transform: translate(-50%, 0);
  z-index: 20;
`;

export default Video;
