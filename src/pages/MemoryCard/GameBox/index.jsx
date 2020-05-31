import React, { memo, useState, useEffect } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { message } from "antd";

import cover from "assets/img/card/cover.png";
import { shuffle } from "../../../utils/shuffle";

function GameBox(props) {
  const { cardStates, openCard, startGame } = props;
  const handleGameAction = (card) => {
    if (startGame) openCard(card);
    else message.warning("请点击开始按钮以便计时");
  };
  return (
    <motion.ul className="game-box" layoutId="card-game">
      <AnimateSharedLayout type="crossfade">
        {cardStates.map((card) => (
          <motion.li
            key={card.id}
            layoutId={card.id}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className={`card-box ${card.visible || card.find ? "active" : ""} ${
              card.find ? "shake" : ""
            }`}
            onClick={() => handleGameAction(card)}
          >
            <div className="card-box__front">
              <img className="front-card" src={cover} alt="front img" />
            </div>
            <div className="card-box__back">
              <img className="back-card" src={card.img} alt="back img" />
            </div>
          </motion.li>
        ))}
      </AnimateSharedLayout>
    </motion.ul>
  );
}
export default memo(GameBox);
