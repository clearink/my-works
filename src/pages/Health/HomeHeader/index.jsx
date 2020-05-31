import React from "react";
import { motion } from "framer-motion";

import hand from "assets/img/hand.svg";
import { animateNames, fade } from "utils/motion";

export default function HomeHeader() {
  return (
    <motion.header className="home-header" {...animateNames} variants={fade}>
      <motion.img
        src={hand}
        layoutId="health-logo"
        alt="logo"
        className="home-header__logo"
      />
      <motion.h1 layoutId="health-step-title" className="home-header__title">
        五件小事
      </motion.h1>
      <motion.p
        layoutId="health-step-subtitle"
        className="home-header__subtitle"
      >
        对抗新冠病毒
      </motion.p>
    </motion.header>
  );
}
