import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import dynamic from "next/dynamic";
import moment from "moment";

const Image = dynamic(() => import("../components/Image"));
const Video = dynamic(() => import("../components/Video"));

gsap.registerPlugin(ScrollToPlugin);

// Scrolling inside the window
export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// Scrolling inside the layout inner
export const scrollToTarget = (target, offset) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: target,
      offsetY: `${offset ? offset : 0}`,
      autoKill: false
    },
    ease: "power2.inOut"
  });
};

export const setRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};

// Create a lookup object to determine whether to
// show an image or a video
export const Media = ({ mediaType = "image", file, index, ...otherProps }) => {
  const mediaLookUp = {
    image: (
      <Image
        key={`${index}`}
        {...file}
        delay={`${index / 5}s`}
        {...otherProps}
      />
    ),
    video: (
      <Video
        key={`${index}`}
        {...file}
        delay={`${index / 5}s`}
        {...otherProps}
      />
    )
  };
  return mediaLookUp[mediaType];
};

// Format time
export const formatTime = duration => {
  return moment
    .utc(moment.duration(duration, "seconds").asMilliseconds())
    .format("mm:ss");
};
