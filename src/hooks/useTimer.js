import { useState, useEffect, useRef, useCallback } from "react";
export function useTimer(timeStep) {
  const lastSecond = useRef(0);
  const [counting, setCounting] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let timer;
    if (counting) {
      const now = Date.now() - lastSecond.current;
      timer = setInterval(() => {
        setTime(() => Date.now() - now);
      }, timeStep);
    }
    return () => clearInterval(timer);
  }, [counting, timeStep]);
  const play = () => {
    setCounting(true);
    lastSecond.current = time;
  };
  const pause = useCallback(() => {
    setCounting(false);
  }, []);
  const reset = useCallback(() => {
    setTime(0);
    setCounting(false);
  }, []);
  return { time, counting, play, pause, reset };
}
