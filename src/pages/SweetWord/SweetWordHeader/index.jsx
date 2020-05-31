import React, { memo, useEffect } from "react";
import { motion } from "framer-motion";
import {
  animateNames,
  loveWord,
  pinyinFade,
  fade,
} from "../../../utils/motion";
import logo from "assets/img/love-logo.png";
import heart from "assets/img/heart.svg";
function SweetWordHeader(props) {
  const { createWord } = props;
  return (
    <motion.header
      {...animateNames}
      variants={fade}
      key="header"
      className="sweet-word-header-box"
    >
      <motion.img
        src={logo}
        alt="love logo"
        className="sweet-word-header-box__logo"
      />
      <motion.ul className="sweet-word-header-box__title">
        <motion.li className="word" custom={0} variants={loveWord}>
          <span className="text">甜</span>
          <motion.span custom={4} variants={pinyinFade} className="pinyin">
            nán
          </motion.span>
        </motion.li>
        <motion.li className="word" custom={1} variants={loveWord}>
          <span className="text">言</span>
          <motion.span custom={5} variants={pinyinFade} className="pinyin">
            rén
          </motion.span>
        </motion.li>
        <motion.li className="word" custom={2} variants={loveWord}>
          <span className="text">蜜</span>
          <motion.span custom={6} variants={pinyinFade} className="pinyin">
            de
          </motion.span>
        </motion.li>
        <motion.li className="word" custom={3} variants={loveWord}>
          <span className="text">语</span>
          <motion.span custom={7} variants={pinyinFade} className="pinyin">
            zuǐ
          </motion.span>
        </motion.li>
      </motion.ul>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.4, type: "spring" }}
        className="button--default start-btn"
        onClick={createWord}
      >
        <span>开始</span>
        {Array.from(Array(6), (_, i) => (
          <motion.img
            alt="heart"
            style={{ animationDelay: `${i * 0.3}s` }}
            key={i}
            className="heart-img"
            src={heart}
          />
        ))}
      </motion.div>
    </motion.header>
  );
}
export default memo(SweetWordHeader);
