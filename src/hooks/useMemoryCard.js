import { useEffect, useState, useCallback } from "react";

export function useMemoryCard(initialData, liveNum = 2) {
  const [cardStates, setCardStates] = useState(initialData);
  const [actionHisotry, setActionHistory] = useState([]);
  const [finished, setFinished] = useState(false);
  const changeCard = useCallback((card) => {
    if (card.find || card.visible) return; //已经出现了不应该再点击
    setCardStates((pre) =>
      pre.map((item) => ({
        ...item,
        visible: item.visible || card.id === item.id,
      }))
    );
    setActionHistory((pre) => pre.concat(card));
  }, []);

  useEffect(() => {
    //5s无操作清除
    if (!actionHisotry.length) return;
    const timer = setTimeout(() => {
      setCardStates((pre) => pre.map((item) => ({ ...item, visible: false })));
      setActionHistory([]);
    }, 5000);
    return () => clearTimeout(timer);
  }, [actionHisotry]);
  useEffect(() => {
    //超过2个 清除
    const showCards = actionHisotry.length;
    if (showCards > liveNum) {
      const newHistory = actionHisotry.slice(-1);
      setActionHistory(newHistory);
      setCardStates((pre) =>
        pre.map((item) => ({
          ...item,
          visible: item.id === newHistory[0].id,
        }))
      );
    }
  }, [liveNum, actionHisotry]);

  useEffect(() => {
    //等于2个 判断是否 是一样的
    const showCards = actionHisotry.length;
    if (showCards === liveNum) {
      const first = actionHisotry[0];
      const equal = actionHisotry.every((item) => item.img === first.img);
      if (equal) {
        setCardStates((pre) =>
          pre.map((item) => ({
            ...item,
            find: item.find || item.img === first.img,
          }))
        );
      }
    }
  }, [liveNum, actionHisotry]);

  useEffect(() => {
    const isFinished = cardStates.every((item) => item.find);
    setFinished(isFinished);
    if (isFinished) setActionHistory([]); //防止setTimeout额外执行一次
  }, [cardStates]);

  const resetGame = useCallback((cardData) => {
    setCardStates(cardData);
    setActionHistory([]);
  }, []);
  return { cardStates, changeCard, finished, setFinished, resetGame };
}
