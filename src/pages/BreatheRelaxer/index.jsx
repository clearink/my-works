import React, { useState, useRef, useEffect, useCallback } from "react";
import librarySound from "assets/audio/library.mp3";
import oceanSound from "assets/audio/ocean.mp3";
import libraryImage from "assets/img/library.jpg";
import oceanImage from "assets/img/ocean.jpg";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import { fade } from "../../utils/motion";
import { useHidden } from "../../hooks/useHidden";

const mapSoundToImage = {
  [librarySound]: libraryImage,
  [oceanSound]: oceanImage,
};
const BreatheColor = ["#60a3bc", "#141414", "#256F87"];
const breatheStep = ["吸气", "屏息", "呼气"];
const breatheClass = ["inhale", "hold", "exhale"];
function BreatheRelaxer() {
  const audioRef = useRef(null);
  const [start, setStart] = useState(false);
  const [bgm, setBGM] = useState(librarySound);
  const [mute, setMute] = useState(false);
  const [visible, setVisible] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);

  const [breatheState, setBreatheState] = useState(0);
  const handleStartBreathe = () => {
    setStart(true);
  };
  const handleChangeAnimate = (e) => {
    if (e.target.classList.contains("breathe-box")) {
      setBreatheState((breatheState + 1) % breatheStep.length);
    }
  };
  useEffect(() => {
    const reset = () => {
      setVisible(document.visibilityState === "visible");
      setBreatheState(0);
    };
    const fullScreenChange = () => setFullscreen(document.fullscreen);
    document.addEventListener("fullscreenchange", fullScreenChange, false);
    document.addEventListener("visibilitychange", reset, false);
    return () => {
      document.removeEventListener("visibilitychange", reset);
      document.removeEventListener("fullscreenchange", fullScreenChange);
    };
  }, []);

  useEffect(() => {
    if (start) audioRef.current.play();
  }, [start, bgm]);

  const opacity = useHidden(start, 5000);

  const handleFullScreen = () => {
    setFullscreen(!fullscreen);
    if (fullscreen) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen();
    }
  };

  const handleMute = () => {
    setMute(!mute);
  };
  const handleChangeBGN = () => {
    if (bgm === librarySound) setBGM(oceanSound);
    else setBGM(librarySound);
  };
  return (
    <section
      className="breathe-relaxer"
      style={{
        backgroundImage: `url(${mapSoundToImage[bgm]})`,
      }}
      onAnimationEnd={handleChangeAnimate}
    >
      <motion.header style={{ opacity }} className="header-box">
        静心呼吸 感受平静
      </motion.header>
      {visible && (
        <section className="main-box">
          <AnimatePresence initial={false} exitBeforeEnter>
            {start ? (
              <motion.div
                key="breathe-box"
                {...fade}
                className={`breathe-box ${breatheClass[breatheState]}`}
              >
                <div
                  className="circle"
                  style={{
                    backgroundColor: BreatheColor[breatheState],
                  }}
                >
                  <span className="breathe-text">
                    {breatheStep[breatheState]}
                  </span>
                  <div
                    className={`pointer-container ${breatheClass[breatheState]}`}
                  >
                    <span
                      className="pointer"
                      style={{
                        backgroundColor: BreatheColor[breatheState],
                      }}
                    ></span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                {...fade}
                key="start-btn"
                className="button--default button"
                onClick={handleStartBreathe}
              >
                开始
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      )}
      <motion.footer style={{ opacity }} className="footer-box">
        <span>
          <i
            className={`iconfont icon-${fullscreen ? "exit-" : ""}full-screen`}
            onClick={handleFullScreen}
          ></i>
        </span>
        <span>
          <i
            className={`iconfont icon-sound-${mute ? "mute" : "filling"}`}
            onClick={handleMute}
          ></i>
        </span>
        <span>
          <i className="iconfont icon-refresh" onClick={handleChangeBGN}></i>
        </span>
      </motion.footer>
      <audio loop muted={mute} ref={audioRef} src={bgm}></audio>
    </section>
  );
}
export default BreatheRelaxer;
