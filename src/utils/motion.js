export const fade = {
  initial: {
    opacity: 0,
    zIndex: 2,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    zIndex: 1,
    transition: {
      when: "afterChildren",
    },
  },
};
export const animateNames = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};
export const fadeToRight = {
  initial: { x: -200, opacity: 0 },
  animate: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
    },
  }),
};

export const healthFadeInto = {
  initial: {
    opacity: 0,
    scale: 1.3,
  },
  animate: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.6,
    },
  }),
  exit: {
    opacity: 0,
    scale: 1.3,
  },
};

export const textAnimate = {
  initial: { y: 30, opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 1.1,
      duration: 1,
      ease: "easeInOut",
    },
  }),
  exit: {
    opacity: 0,
  },
};

export const loveWord = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
      ease: "easeInOut",
    },
  }),
};
export const pinyinFade = {
  initial: {
    opacity: 0,
  },
  animate: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.4,
    },
  }),
};
export const fadeToTop = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
  exit: {
    opacity: 0,
  },
};
