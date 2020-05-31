export function shuffle(source) {
  const arr = source.concat();
  for (let i = arr.length - 1; i >= 0; i--) {
    const newIndex = (Math.random() * i) | 0;
    const t = arr[i];
    arr[i] = arr[newIndex];
    arr[newIndex] = t;
  }
  return arr;
}
