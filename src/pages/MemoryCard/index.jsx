import React, { useState, memo, useEffect, useCallback } from "react";
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import { CardData } from "assets/config/cardData";
import GameBox from "./GameBox";
import ResultBox from "./ResultBox";
import { useMemoryCard } from "hooks/useMemoryCard";
import { shuffle } from "../../utils/shuffle";
import { formatTime } from "../../utils/formatTime";


function MemoryCard() {
  const [start, setStart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [costTime, setCostTime] = useState(0);
  const { cardStates, changeCard, finished, resetGame } = useMemoryCard(
    CardData
  );
  //计时器
  useEffect(() => {
    if (!start) return;
    const timer = setInterval(() => {
      setCostTime((pre) => ++pre);
    }, 1000);
    return () => clearInterval(timer);
  }, [start]);

  useEffect(() => {
    if (finished) {
      setStart(false); //停止计时
      setGameEnd(true);
    }
  }, [finished]);

  const handleControlGame = () => {
    if (start || finished) {
      setCostTime(0);
      resetGame(shuffle(CardData));
      setStart(false);
    } else {
      setStart(true);
    }
  };
  const close = useCallback(() => {
    setGameEnd(false);
  }, []);
  return (
    <section className="memory-card">
      <AnimateSharedLayout type="crossfade">
        <header className="header-box">
          <h1 className="header-box__title">连连看</h1>
          <p className="header-box__subtitle">技术图标连连看</p>
        </header>
        <main className="main-box">
          <section className="action-box">
            <div className="button--default" onClick={handleControlGame}>
              {start || finished ? "重新开始" : "开始游戏"}
            </div>
          </section>
          <GameBox
            startGame={start}
            cardStates={cardStates}
            openCard={changeCard}
          />
          <AnimatePresence>
            {gameEnd && (
              <ResultBox
                costTime={costTime}
                cardStates={cardStates}
                close={close}
              />
            )}
          </AnimatePresence>
        </main>
        <footer className="footer-box">
          <span>本游戏借鉴于</span>
          <a
            className="footer-box__link"
            href="https://works.yangerxiao.com/tech-logo-memo-game/"
          >
            杨二小
          </a>
        </footer>
        <motion.div
          animate={{
            x: start || gameEnd ? "-100%" : 0,
          }}
          transition={{ ease: "easeInOut" }}
          className="cost-time-box"
        >
          {formatTime(costTime)}
        </motion.div>
      </AnimateSharedLayout>
    </section>
  );
}
export default memo(MemoryCard);
