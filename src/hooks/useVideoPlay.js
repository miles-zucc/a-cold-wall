const useVideoPlay = video => {
  if (!video) return null;

  const promise = video.play();
  if (typeof promise !== "undefined") {
    promise
      .then(_ => {
        video.play();
      })
      .catch(error => {
        // Autoplay was prevented, but being the first time it might
        // just need a click/tap. Tell the user we need him to tap/click.
        video.pause();
        console.log(error);
      });
  }
};

export default useVideoPlay;
