import React, {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useCallback
} from "react";
import { Player, ControlBar, ProgressControl, PlayToggle } from "video-react";
import { useRouter } from "next/router";
import styled from "styled-components";
import gsap from "gsap";
import debounce from "lodash.debounce";

import usePrevious from "@/hooks/usePrevious";
import VideoButton from "@/components/VideoButton";
import useGlobalState from "@/hooks/useGlobalState";
import { formatTime } from "@/utils/common";

/**
 * Ready states:
 *
 * 0: no information (HAVE_NOTHING)
 * 1: metadata attributes initialised (HAVE_METADATA)
 * 2: can play one frame only (HAVE_CURRENT_DATA)
 * 3: two or more frames available (HAVE_FUTURE_DATA)
 * 4: enough data (HAVE_ENOUGH_DATA)
 */
const VideoPlayer = forwardRef(
  ({ onVideoReady = () => {}, disableControls = true, ...props }, ref) => {
    const [videoState, setVideoState] = useState(null);
    const [isReady, setIsReady] = useState(false);
    // const [controlsPosition, setControlPosition] = useState(0);
    const wrapper = useRef(null);
    const router = useRouter();
    const { slug } = router.query;
    const { state } = useGlobalState();
    const { audioMuted } = state;
    const [muted, setMuted] = useState(false);

    useEffect(() => {
      // store the player's state change to local state
      ref.current.subscribeToStateChange(setVideoState);

      return () => {
        // TODO: check unsubscribe (@author: milenazuccarelli)
        // Maybe it's not needed if we use a VideoPlayer for each video source (@author: alebarbieri)
      };
    }, [setVideoState]);

    // check the previous video state
    const prevReadyState = usePrevious(videoState?.readyState);

    useEffect(() => {
      if (videoState && !isReady) {
        if (videoState.readyState === 4) {
          setIsReady(true);
          positionControlBar();
        }

        // prevent `onVideoReady` from being called unnecessarily
        if (videoState.readyState !== prevReadyState) {
          // callback with the current ready state and the ref to the player
          onVideoReady(videoState.readyState, ref.current);
        }
      }
    }, [videoState, isReady, setIsReady, onVideoReady]);

    const positionControlBar = useCallback(() => {
      const controlBar = wrapper.current.querySelector(
        ".video-react-control-bar"
      );
      if (controlBar) {
        const winSize = {
          width: window.innerWidth,
          height: window.innerHeight,
          ratio: window.innerWidth / window.innerHeight
        };
        if (16 / 9 < winSize.ratio) {
          const videoHeight = (winSize.width * 9) / 16;
          gsap.to(controlBar, {
            duration: 0.5,
            y: -(videoHeight - winSize.height) / 2,
            ease: "power2.inOut"
          });
        } else {
          gsap.to(controlBar, {
            duration: 0.5,
            y: 0,
            ease: "power2.inOut"
          });
        }
      }
    }, [wrapper, window.innerWidth, window.innerHeight]);
    const debounceHandleResize = debounce(positionControlBar, 150);

    useEffect(() => {
      positionControlBar();
    }, [disableControls]);

    useEffect(() => {
      return () => {
        const controlBar = wrapper.current.querySelector(
          ".video-react-control-bar"
        );
        gsap.killTweensOf(controlBar);
      };
    }, []);

    useEffect(() => {
      if (slug) {
        window.addEventListener("resize", debounceHandleResize);
      }
      return () => {
        window.removeEventListener("resize", debounceHandleResize);
      };
    }, [slug]);

    const onClick = useCallback(() => {
      setMuted(!muted);
    });

    return (
      <Wrapper ref={wrapper}>
        <Player ref={ref} {...props} muted={muted || audioMuted}>
          <ControlBar
            disableCompletely={disableControls}
            disableDefaultControls={true}
            autoHide={false}
          >
            <PlayToggle />
            <VideoButton onClick={onClick} paddingRight>
              {muted ? "UNMUTE" : "MUTE"}
            </VideoButton>
            <ProgressControl />
            <VideoButton>
              {videoState && (
                <>
                  — {formatTime(videoState?.duration - videoState?.currentTime)}
                </>
              )}
            </VideoButton>
          </ControlBar>
        </Player>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  height: 100%;
`;

// const StyledPlayToggle = styled(PlayToggle)`
//   ${(props) => `
//     ${props.theme.typography.navigation};
//     flex: 1;
//     font-size: 1em;
//     line-height: 3em;
//     min-width: 2em;
//     width: auto;
//     padding-left: 1em;
//     padding-right: 1em;
//     cursor: ${props.onClick ? "pointer" : "default"};
//     outline: none;
//   `}
// `;

export default VideoPlayer;
