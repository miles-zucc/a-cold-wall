import React, { useCallback, useRef } from "react";
import styled from "styled-components";

import { playAudio, stopAudio } from "@/utils/state";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import useGlobalState from "@/hooks/useGlobalState";
import ProgressBar from "@/components/ProgressBar";
import { formatTime } from "@/utils/common";

const AudioPlayer = ({ mediaItemUrl, mimeType }) => {
  const audioRef = useRef();
  const { state, dispatch } = useGlobalState();

  const { currentTime, duration, isPlaying, setPlaying } = useAudioPlayer(
    audioRef
  );

  // When user interacts with the player, update global state
  const onClick = useCallback(() => {
    setPlaying(isPlaying ? false : true);
    dispatch(isPlaying ? stopAudio() : playAudio());
  }, [isPlaying, dispatch]);

  return (
    <>
      <audio ref={audioRef}>
        <source src={mediaItemUrl} type={mimeType} />
      </audio>

      <ProgressBar currentTime={currentTime} duration={duration} />

      <Controls>
        {isPlaying ? (
          <PauseButton onClick={onClick}>PAUSE</PauseButton>
        ) : (
          <PlayButton onClick={onClick}>PLAY</PlayButton>
        )}
        {formatTime(currentTime)} / {formatTime(duration)}
      </Controls>
    </>
  );
};

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlayButton = styled.div`
  cursor: pointer;
`;

const PauseButton = styled.div`
  cursor: pointer;
`;

export default AudioPlayer;
