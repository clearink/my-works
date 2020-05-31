export function debounce(fn, delay = 200) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    try {
      args[0].persist();
    } catch {}
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
