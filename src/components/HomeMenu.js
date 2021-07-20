import React, { useEffect, useRef, useCallback, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import { personaRoutes } from "@/utils/routes";
import useVideoPlay from "@/hooks/useVideoPlay";
import useVideoPause from "@/hooks/useVideoPause";

const HomeMenu = props => {
  const containerRef = useRef();
  const [hovered, setHovered] = useState({ 0: true, 1: true });
  const [video, setVideo] = useState({ 0: null, 1: null });

  useEffect(() => {
    // On mount, set the video object to use later
    let videoZero = document.querySelector(".video-0");
    let videoOne = document.querySelector(".video-1");
    setVideo({ 0: videoZero, 1: videoOne });
  }, []);

  const handleHover = useCallback(index => {
    if (index === 0) {
      // first video is hovered and played, second is paused
      setHovered({ 0: true, 1: false });
      useVideoPlay(video[0]);
      useVideoPause(video[1]);
    } else {
      // second video is hovered and played, second is paused
      setHovered({ 0: false, 1: true });
      useVideoPlay(video[1]);
      useVideoPause(video[0]);
    }
  });

  const handleLeave = useCallback(index => {
    // Unblur text and pause both videos
    setHovered({ 0: "null", 1: "null" });
    useVideoPause(video[0]);
    useVideoPause(video[1]);
  });

  return (
    <Container ref={containerRef}>
      {personaRoutes.map((route, index) => (
        <>
          <Link href={route.href} as={route.as} key={`homemenu-${index}`}>
            <Anchor
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleLeave(index)}
            >
              {/* Persona Title */}
              <Item top hovered={hovered[index]}>
                {route.label?.toUpperCase()}
              </Item>
              {/* Prompt */}
              <Item hovered={hovered[index]}>VIEW COLLECTION</Item>
              <Video className={`video-${index}`} mute src={route.cover} />
            </Anchor>
          </Link>
          <Border />
        </>
      ))}
    </Container>
  );
};

const Container = styled.div`
  ${props => `
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 13;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;

    ${props.theme.mediaQueries.fromTablet} {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  `}
`;

const Item = styled.div`
  ${props => `
    position: absolute;
    left: ${props.theme.margins.layoutHorizontal};
    z-index: 1;
    pointer-events: none;
    ${props.theme.typography.navigation};
    line-height: normal;
    transition: filter 0.6s linear;  
    cursor: pointer;

    // Blur when hovered out
    ${
      props.hovered === "null"
        ? "filter: blur(0)"
        : props.hovered === true
        ? "filter: blur(0)"
        : "filter: blur(2px)"
    };

    // Top and bottom links
    top: ${props.top ? props.theme.margins.layoutHorizontal : "unset"};
    bottom: ${props.top ? "unset" : props.theme.margins.layoutHorizontal};
    border-bottom: ${props.top ? "none" : "1px solid"};
  `}
`;

const Video = styled.video`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: middle;
`;

const Border = styled.div`
  ${props => `
    display: none;
    background: ${props.theme.colors.secondary};

    ${props.theme.mediaQueries.fromTablet} {
      display: block;
      height: 100%;
      width: 1px;
    }
  `}
`;

const Anchor = styled.a`
  ${props => `
    position: relative;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
    ${props.theme.mediaQueries.fromTablet} {
      height: 100%;
      width: 50%;
    }
  `}
`;

export default HomeMenu;
