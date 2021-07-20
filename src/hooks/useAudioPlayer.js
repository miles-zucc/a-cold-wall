import { useState, useEffect } from "react";

const useAudioPlayer = ref => {
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [clickedTime, setClickedTime] = useState();

  useEffect(() => {
    if (ref) {
      const audio = ref.current;

      const setAudioData = () => {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
      };

      const setAudioTime = () => setCurrentTime(audio.currentTime);

      // add event listeners
      audio.addEventListener("loadeddata", setAudioData);
      audio.addEventListener("timeupdate", setAudioTime);

      if (clickedTime && clickedTime !== currentTime) {
        audio.currentTime = clickedTime;
        setClickedTime(null);
      }

      // clean up event listeners on unmount
      return () => {
        audio.removeEventListener("loadeddata", setAudioData);
        audio.removeEventListener("timeupdate", setAudioTime);
      };
    }
  }, [ref]);

  return {
    currentTime,
    duration,
    setClickedTime
  };
};

export default useAudioPlayer;
