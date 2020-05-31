import React, { memo } from "react";
import { motion } from "framer-motion";
import logo from "assets/img/hand.svg";
function HealthLayout() {
  return (
    <div className="health-layout">
      <header className="header-box">
        <motion.img layoutId="logo" src={logo} alt="logo" className="header-box__logo" />
      </header>
    </div>
  );
}
export default memo(HealthLayout);
