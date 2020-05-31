import React, { memo } from "react";
import TransitionSwitch from "../components/TransitionSwitch";
import { motion, AnimateSharedLayout } from "framer-motion";
import { fade, animateNames } from "../utils/motion";

function Container(props) {
  const { routes } = props;
  return (
    <motion.div {...animateNames} variants={fade}>
      <AnimateSharedLayout type="crossfade">
        <TransitionSwitch routes={routes} />
      </AnimateSharedLayout>
    </motion.div>
  );
}
export default memo(Container);
