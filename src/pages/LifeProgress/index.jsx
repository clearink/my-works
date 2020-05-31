import React, { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-particles-js";
import config from "assets/config/particle.json";
import { Form } from "antd";

import { fade, animateNames, textAnimate } from "../../utils/motion";

import SettingForm from "./SettingForm";

const { useForm } = Form;
const sexMap = {
  male: "🕺",
  flmale: "💃",
};
function LifeProgress(props) {
  const [data, setData] = useState(false);
  const [start, seStart] = useState(false);
  const [form] = useForm();

  const finish = (values) => {
    console.log({ ...values });
    const birthDay = values.birthDay.format("YYYY-MM-DD");
    const days = Math.ceil((Date.now() - values.birthDay) / 86400000);
    const percent = ((days / values.liveYear / 365) * 100) | 0;
    const newData = {
      ...values,
      birthDay,
      days,
      percent,
    };
    setData(newData);
    seStart(true);
  };
  return (
    <section className="life-progress">
      <Particles params={config} className="life-progress__particle" />{" "}
      <header className="header-box">
        <span data-py="shēng">生</span>
        <span data-py="mìng">命</span>
        <span data-py="jì">计</span>
        <span data-py="suàn">算</span>
        <span data-py="qì">器</span>
      </header>
      <motion.main className="main-box">
        <AnimatePresence>
          {start ? (
            <motion.section
              key="result"
              {...animateNames}
              variants={cardAnimate(-1)}
              className="card card-result"
            >
              <div className="progress">
                <span role="img" aria-label="birth" className="status birth">
                  👶
                </span>
                <span role="img" aria-label="die" className="status die">
                  👻
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${data.percent}%` }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="progress__bar"
                >
                  <span role="img" aria-label="birth" className="status man">
                    {sexMap[data.sex]}
                  </span>
                </motion.div>
              </div>
              <ul className="text-list">
                <motion.li custom={1} {...animateNames} variants={textAnimate}>
                  <span className="life-data">{data.birthDay}</span>
                </motion.li>
                <motion.li custom={2} {...animateNames} variants={textAnimate}>
                  这一天你来到了这个世界
                </motion.li>
                <motion.li custom={3} {...animateNames} variants={textAnimate}>
                  这是你生命中的第
                  <span className="life-data">{data.days}</span>天
                </motion.li>
                <motion.li custom={4} {...animateNames} variants={textAnimate}>
                  <span className="life-data">{data.percent}</span>%的时光已流逝
                </motion.li>
                <motion.li custom={5} {...animateNames} variants={textAnimate}>
                  在这个世界,你过得还好吗
                </motion.li>
                <motion.li custom={6} {...animateNames} variants={textAnimate}>
                  ...
                </motion.li>
              </ul>
            </motion.section>
          ) : (
            <motion.section
              key="setting"
              {...animateNames}
              variants={cardAnimate(1)}
              className="card card-setting"
            >
              <SettingForm form={form} finish={finish} />
            </motion.section>
          )}
          {start && (
            <motion.i
              {...fade}
              className="iconfont icon-set"
              onClick={() => seStart(false)}
            ></motion.i>
          )}
        </AnimatePresence>
        }
      </motion.main>
    </section>
  );
}
export default memo(LifeProgress);

function cardAnimate(dir = 1) {
  return {
    initial: { y: 200 * dir, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
    exit: {
      y: 200 * dir,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
  };
}
