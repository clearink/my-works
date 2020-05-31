import React, { useState, useMemo, useEffect } from "react";
import { Select } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import comic from "../../assets/img/comic.jpg";
import scenery from "assets/img/scenery.jpg";
import animal from "assets/img/animal.jpg";
import { fade } from "../../utils/motion";
import { useTimer } from "../../hooks/useTimer";
const { Option } = Select;

const startGreyTime = 5;
function FitnessGoal() {
  const [selectValue, setSelectValue] = useState(comic);
  const [countValue, setCountValue] = useState(300);
  const [finished, setFinished] = useState(false);

  const { time, counting, play, reset } = useTimer(1000);

  useEffect(() => {
    const count = countValue - ~~(time / 1000);
    if (!count) {
      reset();
      setFinished(true);
    }
    //显示图片
  }, [time, countValue, reset]);

  const count = useMemo(() => {
    const count = countValue - ~~(time / 1000);
    const second = count % 60;
    const minute = (count / 60) | 0;
    return `${String(minute).padStart(2, "0")}:${String(second).padStart(
      2,
      "0"
    )}`;
  }, [countValue, time]);
  const filterValue = useMemo(() => {
    const second = (time / 1000) | 0;
    const baseBlurVal = 40;
    const percent = 1 - second / countValue;
    const countDown = countValue - second;
    return `blur(${(baseBlurVal * percent) | 0}px) grayscale(${
      countDown <= startGreyTime ? countDown / startGreyTime : 1
    })`;
  }, [countValue, time]);

  const handleAgain = () => {
    play();
    setFinished(false);
  };
  return (
    <div className="fitness-goal">
      <motion.div
        className="image-wrap"
        style={{
          backgroundImage: `url(${selectValue})`,
          filter: filterValue,
        }}
      ></motion.div>
      <AnimatePresence initial={false} exitBeforeEnter>
        {counting && (
          <motion.div className="count" key="count" {...fade}>
            {count}
          </motion.div>
        )}
        {!counting && !finished && (
          <motion.div key="start" {...fade} className="action-wrap">
            <Select
              className="image-select"
              defaultValue={selectValue}
              onChange={setSelectValue}
            >
              <Option value={scenery}>风景</Option>
              <Option value={comic}>动漫</Option>
              <Option value={animal}>动物</Option>
            </Select>

            <Select
              size="large"
              className="time-select"
              defaultValue={countValue}
              onChange={setCountValue}
            >
              <Option value={300}>5分钟</Option>
              <Option value={900}>15分钟</Option>
              <Option value={1800}>30分钟</Option>
            </Select>
            <div className="start-btn button--default" onClick={play}>
              START
            </div>
          </motion.div>
        )}
        {finished && (
          <>
            <motion.div
              key="again"
              className="again-btn button--default"
              onClick={handleAgain}
              {...fade}
            >
              再来一次
            </motion.div>
            <motion.div
              className="finish-image"
              initial={{ y: -100, opacity: 0, rotate: 0 }}
              animate={{ y: 0, opacity: 1, rotate: 10 }}
              exit={{ y: -100, opacity: 0, rotate: 0 }}
              style={{
                backgroundImage: `url(${selectValue})`,
              }}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
export default FitnessGoal;
