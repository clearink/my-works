export function hex2rgb(hexStr) {
  const r = parseInt(hexStr.substring(1, 3), 16);
  const g = parseInt(hexStr.substring(3, 5), 16);
  const b = parseInt(hexStr.substring(5), 16);
  return `rgb(${r},${g},${b})`;
}
export function formatTime(time) {
  const ms = time % 1000;
  time = (time / 1000) | 0;
  const se = time % 60;
  time = (time / 60) | 0;
  const mi = time % 60;
  return `${String(mi).padStart(2, "0")}:${String(se).padStart(
    2,
    "0"
  )}.${String(ms).padStart(2, "0").slice(0, 2)}`;
}
