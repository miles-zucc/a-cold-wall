import styled, { keyframes, css } from "styled-components";

const VideoButton = ({ children, onClick, paddingRight }) => (
  <Button onClick={onClick} paddingRight={paddingRight}>
    {children}
  </Button>
);

const blink = keyframes`
   0% {
      opacity: 0.0;
   }
   100% {
      opacity: 1.0;
   }
`;

const Button = styled.div`
  ${props => `
    ${props.theme.typography.navigation};
    flex: none;
    font-size: 1em;
    line-height: 3em;
    min-width: 2em;
    width: auto;
    padding-left: ${props.theme.margins.layoutHorizontal};
    padding-right: ${
      props.paddingRight ? props.theme.margins.layoutHorizontal : "0"
    };
    cursor: ${props.onClick ? "pointer" : "default"};
    outline: none;
  `}
  
  animation: ${props =>
    props.blink
      ? css`
          ${blink} 1.5s infinite;
        `
      : "none"};
`;

export default VideoButton;
