import React, { memo } from "react";
import { motion } from "framer-motion";

import logo from "assets/img/hand.svg";
import { animateNames, fade } from "utils/motion";

function StepHeader(props) {
  const { cancal } = props;
  return (
    <motion.header {...animateNames} variants={fade} className="step-header">
      <motion.img
        layoutId="health-logo"
        src={logo}
        alt="logo"
        className="step-header__logo"
        onClick={cancal}
      />
      <div className="title-wrap">
        <motion.h1 layoutId="health-step-title" className="step-header__title">
          五件小事
        </motion.h1>
        <motion.p
          layoutId="health-step-subtitle"
          className="step-header__subtitle"
        >
          对抗新冠病毒
        </motion.p>
      </div>
    </motion.header>
  );
}
export default memo(StepHeader);
