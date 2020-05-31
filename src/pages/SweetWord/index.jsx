import React, { memo, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animateNames, fade } from "../../utils/motion";
import SweetWordHeader from "./SweetWordHeader";
import WordMap from "./WordMap";
import SweetWordResult from "./SweetWordResult";
function SweetWord() {
  const resultRef = useRef(null);
  const [showTitle, setShowTitle] = useState(true); //显示标题
  const [start, setStart] = useState(false); //开始
  const [downLoad, setDownLoad] = useState(false);

  const handleCreateWord = useCallback(() => {
    setShowTitle(false);
  }, []);
  const handleClose = useCallback(() => {
    setStart(false);
  }, []);
  const handleStart = useCallback(() => {
    setStart(true);
  }, []);
  const handleDownLoad = async () => {
    if (downLoad) return;
    setDownLoad(true);
    await resultRef.current.download();
    setDownLoad(false);
  };
  return (
    <motion.section variants={fade} className="sweet-word">
      <AnimatePresence exitBeforeEnter>
        {showTitle && (
          <SweetWordHeader key="header" createWord={handleCreateWord} />
        )}
        {!showTitle && !start && <WordMap key="words" start={handleStart} />}
        {start && (
          <SweetWordResult ref={resultRef} key="result" close={handleClose} />
        )}
      </AnimatePresence>
      <footer className={`footer-box ${start ? "active" : ""}`}>
        <i className="iconfont icon-download" onClick={handleDownLoad}></i>
        <i className="iconfont icon-refresh" onClick={handleClose}></i>
      </footer>
    </motion.section>
  );
}
export default memo(SweetWord);
