import React, {
  memo,
  useMemo,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { motion } from "framer-motion";
import { sweetWordList } from "assets/config/sweetWord";
import { loveWord, animateNames } from "utils/motion";
import html2canvas from "html2canvas";

function SweetWordResult(props, ref) {
  const resultRef = useRef(null);
  const downloadRef = useRef(null);
  useImperativeHandle(ref, () => ({
    download: async () => {
      try {
        const canvas = await html2canvas(resultRef.current, {
          onclone: (clonePage) => {
            clonePage.querySelectorAll(".word").forEach((node) => {
              node.setAttribute("style", "");
            });
          },
          removeContainer: true,
        });
        const url = canvas.toDataURL("image/png");
        downloadRef.current.setAttribute("href", url);
        downloadRef.current.setAttribute("download", `sw-${Date.now()}.png`);
        downloadRef.current.click();
      } catch (err) {
        console.log(err);
      }
    },
  }));

  const sweetWord = useMemo(() => {
    const randomIndex = (Math.random() * sweetWordList.length) | 0;

    return sweetWordList[randomIndex].split("|").reduce((pre, cur) => {
      if (pre.length === 0) {
        return pre.concat({ delayStart: 0, wordList: cur.split("") });
      } else {
        const { delayStart: lastDelay, wordList: lastWordList } = pre[
          pre.length - 1
        ];
        return pre.concat({
          delayStart: lastDelay + lastWordList.length,
          wordList: cur.split(""),
        });
      }
    }, []);
  }, []);

  return (
    <motion.main
      ref={resultRef}
      className="sweet-word-result"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.3, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      whileHover={{ scale: 1.04 }}
    >
      {sweetWord.map(({ wordList, delayStart }) => (
        <motion.p {...animateNames} className="line" key={wordList}>
          {wordList.map((word, i) => {
            return (
              <motion.span
                custom={delayStart + i}
                variants={loveWord}
                key={word + i}
                className="word"
              >
                {word}
              </motion.span>
            );
          })}
        </motion.p>
      ))}
      <a
        href=" "
        ref={downloadRef}
        style={{
          position: "fixed",
          top: -999,
        }}
        download
      >
        下载
      </a>
    </motion.main>
  );
}
export default memo(forwardRef(SweetWordResult));
