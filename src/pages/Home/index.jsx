import React, { memo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "assets/config/menuData";
import { fadeToTop, animateNames, fade } from "../../utils/motion";
function Home() {
  return (
    <div className="home">
      <header className="header-box">
        <h1 className="header-box__title">一些小作品</h1>
      </header>
      <AnimatePresence>
        <motion.section {...animateNames} className="article-list">
          {menuData.map((item, i) => {
            return (
              <motion.article
                key={item.path}
                custom={i}
                variants={fadeToTop}
                className="article-box"
                style={{ backgroundImage: `url(${item.bg})` }}
              >
                <Link className="article-box__link" to={item.path}>
                  <h1 className="article-box__title">{item.title}</h1>
                </Link>
              </motion.article>
            );
          })}
          {Array.from(Array(3 - (menuData.length % 3)), (_, i) => (
            <div key={i} className="article-box--empty"></div>
          ))}
        </motion.section>
      </AnimatePresence>
    </div>
  );
}

export default memo(Home);
