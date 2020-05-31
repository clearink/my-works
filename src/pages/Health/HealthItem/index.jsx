import React, { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { animateNames, fade, healthFadeInto } from "utils/motion";

function HealthItem(props) {
  const { cancal, data, prev, next } = props;
  const healthStepAnimate = useAnimation();

  useEffect(() => {
    healthStepAnimate.set(healthFadeInto.initial);
    healthStepAnimate.start(healthFadeInto.animate);
    return () => healthStepAnimate.stop();
  }, [data, healthStepAnimate]);
  return (
    <motion.div {...animateNames} variants={fade} className="health__item">
      <motion.div className="action-box">
        <motion.p
          className="action__number"
          custom={0}
          animate={healthStepAnimate}
        >
          {data.step}
        </motion.p>
        <div className="action__content">
          <motion.p
            className="action__content--title"
            custom={1}
            animate={healthStepAnimate}
          >
            {data.title}
          </motion.p>
          <motion.p
            className="action__content--intro"
            custom={2}
            animate={healthStepAnimate}
          >
            {data.intro}
          </motion.p>
          <motion.p
            className="action__content--detail"
            custom={3}
            animate={healthStepAnimate}
          >
            {data.detail}
          </motion.p>
        </div>
        <motion.img
          custom={4}
          animate={healthStepAnimate}
          src={data.img}
          alt="wash hand"
          className="action__img"
        />
      </motion.div>
      <motion.div variants={fade} className="navbar-box">
        <i className="iconfont icon-leftarrow" onClick={prev}></i>
        <i className="iconfont icon-home" onClick={cancal}></i>
        <i className="iconfont icon-rightarrow" onClick={next}></i>
      </motion.div>
    </motion.div>
  );
}

export default memo(HealthItem);
