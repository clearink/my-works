export function throttle(fn, delay = 200) {
  let timer = null;
  return function (...args) {
    if (timer !== null) return;
    fn.apply(this, args);
    timer = setTimeout(() => {
      timer = null;
    }, delay);
  };
}
