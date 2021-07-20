import React, { useRef } from "react";
import styled from "styled-components";

const ProgressBar = ({ duration, currentTime }) => {
  const progressRef = useRef();
  const percentage = (currentTime / duration) * 100;

  return <Progress ref={progressRef} percentage={percentage}></Progress>;
};

const Progress = styled.div`
  height: 3px;
  margin: 10px 0;
  background: linear-gradient(
    to right,
    white ${props => (props.percentage ? props.percentage : 0)}%,
    #4f4f4f 0
  );
`;

export default ProgressBar;
