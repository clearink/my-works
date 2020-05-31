import React, { memo, useState, useEffect } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { commonWord } from "assets/config/sweetWord";
import { shuffle } from "utils/shuffle";

function WordMap(props) {
  const { start } = props;
  const [wordList, setWordList] = useState(createRandomWord(16));
  useEffect(() => {
    setWordList((pre) => shuffle(pre));
    const timer = setTimeout(start, 1000);
    return () => clearTimeout(timer);
  }, [start]);
  return (
    <motion.div
      className="word-map"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.3, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <AnimateSharedLayout type="crossfade" transition={{ duration: 0.8 }}>
        {wordList.map((word) => (
          <motion.span layoutId={word} onAnimationEnd={()=>{
            console.log(1)
          }} className="word" key={word.id}>
            {word.text}
          </motion.span>
        ))}
      </AnimateSharedLayout>
    </motion.div>
  );
}

export default memo(WordMap);
function createRandomWord(len) {
  const length = commonWord.length;
  return Array.from(Array(len), (_, i) => {
    return {
      id: i,
      text: commonWord[(Math.random() * length) | 0],
    };
  });
}
