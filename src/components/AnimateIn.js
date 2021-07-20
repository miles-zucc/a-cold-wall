import React, { Children, cloneElement } from "react";
import { useInView } from "react-intersection-observer";

/**
 * Checks if the component is in the viewport and animates it in.
 *
 * @param {string} threshold at which % of target's visibility the callback executes
 * @param {string} speed speed of the animation (seconds)
 * @param {string} delay delay of the animation (seconds)
 * @param {string} x animation translation for X-axis
 * @param {string} y animation translation for Y-axis
 * @param {boolean} blur whether target should start with a blur filter
 * @param {string} blurRadius blur radius
 *
 */
const AnimateIn = ({
  threshold,
  speed,
  delay,
  x,
  y,
  blur,
  blurRadius,
  children,
  ...otherProps
}) => {
  const [ref, isInView] = useInView({
    triggerOnce: false, // Set to true if you want the animation to happen only once
    rootMargin: `${threshold} 0px` // Grow or shrink each side of the root element's bounding box before computing intersections
  });

  const styles = {
    opacity: isInView ? 1 : 0,
    ...(blur && {
      filter: isInView ? "blur(0)" : `blur(${blurRadius})`
    }),
    transform: `translate(${isInView ? 0 : x}, ${isInView ? 0 : y})`,
    transition: `
        transform ${speedMap["normal"]} ease,
        opacity ${speedMap["normal"]} ease-in-out,
        filter ${speedMap["slow"]} linear`,
    transitionDelay: delay,
    willChange: "transform, opacity, filter",
    verticalAlign: "bottom"
  };

  // Clone the child elements and apply the new animation styles so
  // that the children can consume the original `Layout` grid
  return (
    <>
      {children &&
        Children.map(children, child =>
          cloneElement(child, {
            ref: ref,
            style: {
              ...styles,
              ...child.props.style
            },
            ...otherProps
          })
        )}
    </>
  );
};

export default AnimateIn;

const speedMap = {
  slow: "1.5s",
  normal: "0.6s",
  fast: "0.3s"
};

AnimateIn.defaultProps = {
  threshold: "10%",
  speed: "0,6s",
  delay: "0s",
  x: "0",
  y: "70px",
  blur: false,
  blurRadius: "4px"
};
