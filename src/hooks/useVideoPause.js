const useVideoPause = video => {
  if (!video) return null;

  video.pause();
};

export default useVideoPause;
