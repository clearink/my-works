import React, { memo, useRef, useEffect } from "react";
import anime from "animejs";
function Anime(props) {
  const { children, ...animeProps } = props;
  console.log();
  const refs = useRef([]);
  useEffect(() => {
    const domList = refs.current;
    anime({
      targets: domList,
      ...animeProps,
    });
    return () => {
      anime.remove(domList);
    };
  }, [animeProps, children]);
  return React.Children.map(children, (child, i) => {
    return { ...child, ref: (dom) => (refs.current[i] = dom) };
  });
}
export default memo(Anime, propsEqual);

function propsEqual(prev, next) {
  const { children: children1, ...PrevProps } = prev;
  const { children: children2, ...nextProps } = next;
  return JSON.stringify(PrevProps) === JSON.stringify(nextProps);
}
