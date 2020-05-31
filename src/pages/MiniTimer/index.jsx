import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatTime } from "../../utils";
import { useTimer } from "../../hooks/useTimer";
function MiniTimer() {
  const isInitial = useRef(true);
  const { time, counting, play, pause, reset } = useTimer(20);

  const handleToggleTimer = () => {
    if (counting) pause();
    else play();
    isInitial.current = false;
  };

  const handleResetTimer = (e) => {
    e.stopPropagation();
    reset();
  };
  return (
    <section className="mini-timer" onClick={handleToggleTimer}>
      <section className="timer-box">
        <div className="timer-text">{formatTime(time)}</div>
        <AnimatePresence initial={false} exitBeforeEnter>
          {!counting && !isInitial.current && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ ease: "easeInOut" }}
              className="timer-btn"
              onClick={handleResetTimer}
            >
              reset
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </section>
  );
}
export default MiniTimer;
