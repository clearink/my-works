import { useEffect, useCallback } from "react";
import { debounce } from "../utils/debounce";
import { useSpring } from "framer-motion";

//过多少毫秒能让opacity=0
export function useHidden(dep, delay) {
  const opacity = useSpring(1, {damping:100});
  useEffect(() => {
    const hide = debounce(() => {
      if (dep) opacity.set(0);
    }, delay);
    const mouseMove = () => {
      opacity.set(1);
      hide();
    };
    mouseMove();
    document.body.addEventListener("mousemove", mouseMove, false);
    return () => document.body.removeEventListener("mousemove", mouseMove);
  }, [dep, delay, opacity]);
  return opacity;
}
