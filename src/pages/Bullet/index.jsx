import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Bullet() {
  const [open, setOpen] = useState(true);
  const [bulletList, setBulletList] = useState([]);
  useEffect(() => {
    if (!open) return;
    const timer = setInterval(() => handleAddBullet(), 1800);
    return () => clearInterval(timer);
  }, [open]);

  const handleAddBullet = () => {
    setBulletList((pre) =>
      pre
        .concat({
          id: Math.random().toString(32),
          text: Math.random().toString(32),
          top: (Math.random() * 11) | 0,
        })
        .slice(0, 20)
    );
  };
  const handleBulletEnd = (e) => {
    const { dataset } = e.target;
    console.log(bulletList.filter(({ id }) => id !== dataset.id));
    setBulletList(bulletList.filter(({ id }) => id !== dataset.id));
  };
  const handleToggleBullet = () => {
    setBulletList([]);
    setOpen(!open);
  };
  return (
    <section
      className="bullet"
      onTransitionEnd={handleBulletEnd}
    >
      <header className="header-box">
        <span onClick={handleToggleBullet} className="clear-bullet">
          {open ? "关闭" : "打开"}
        </span>
      </header>
      <div className="bullet--list">
        <AnimatePresence>
          {bulletList.map(({ text, id, top }) => (
            <motion.div
              animate={{ x: "-100%" }}
              className="bullet--list__item"
              data-id={id}
              key={id}
              exit
              style={{ top: `${top * 6}rem` }}
            >
              {text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <footer className="footer-box">
        <button className="" onClick={handleAddBullet}>
          add bullet item
        </button>
      </footer>
    </section>
  );
}
export default Bullet;
