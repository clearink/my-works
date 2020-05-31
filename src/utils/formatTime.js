export function formatTime(second) {
  const minute = String((second / 60) | 0).padStart(2, "0");
  const sec = String(second % 60).padStart(2, "0");
  return `${minute}:${sec}`;
}
