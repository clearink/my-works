import React, { useState, useCallback } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import { animateNames, fadeToRight } from "utils/motion";
import { healthData } from "assets/config/healthData";

import HealthItem from "./HealthItem";
import StepHeader from "./StepHeader";
import HomeHeader from "./HomeHeader";
function Health(props) {
  const [selectItem, setSelectItem] = useState(null);

  const handleClearSelect = useCallback(() => {
    setSelectItem(null);
  }, []);

  const handlePrevStep = useCallback(() => {
    setSelectItem((_) => {
      const index = Math.max(1, _.step - 1);
      return healthData[index - 1];
    });
  }, []);
  const handleNextStep = useCallback(() => {
    setSelectItem((_) => {
      const index = Math.min(healthData.length, _.step + 1);
      return healthData[index - 1];
    });
  }, []);
  return (
    <section className="health">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence exitBeforeEnter>
          {selectItem ? (
            <>
              <StepHeader key="step-header" cancal={handleClearSelect} />
              <HealthItem
                data={selectItem}
                cancal={handleClearSelect}
                prev={handlePrevStep}
                next={handleNextStep}
              />
            </>
          ) : (
            <>
              <HomeHeader key="home-header" />
              <main className="main-box">
                <ul className="action-list">
                  {healthData.map((item, i) => (
                    <motion.li
                      custom={i}
                      {...animateNames}
                      variants={fadeToRight}
                      key={item.title}
                      whileHover={{ x: 10 }}
                      className="action-list__item"
                      onClick={() => setSelectItem(item)}
                    >
                      <p className="item-title">{item.title}</p>
                      <p className="item-intro">{item.intro}</p>
                      <i className="iconfont icon-rightarrow"></i>
                    </motion.li>
                  ))}
                </ul>
              </main>
            </>
          )}
        </AnimatePresence>
        <footer className="footer-box">共同战疫</footer>
      </AnimateSharedLayout>
    </section>
  );
}
export default Health;
