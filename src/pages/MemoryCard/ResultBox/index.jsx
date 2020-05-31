import React, { memo } from "react";
import { motion } from "framer-motion";
import { formatTime } from "../../../utils/formatTime";
function ResultBox(props) {
  const { cardStates, close, costTime } = props;
  return (
    <motion.section className="result-box" layoutId="card-game">
      <header className="result-header-box">
        <p className="time-cost">用时:{formatTime(costTime)}秒</p>
        <i className="iconfont icon-close" onClick={close}></i>
      </header>
      <motion.ul className="result-game-box">
        {cardStates.map((card) => (
          <li key={card.id} className="card-box">
            <img className="card-img" src={card.img} alt="back img" />
          </li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
export default memo(ResultBox);
