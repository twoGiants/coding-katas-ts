export function nextBigger(n: number): number {
  const arr = [...`${n}`].reverse();
  // first we need to find first digit (from the end) what is smaller then previous
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      // now we need to find first (from the end) digit that is bigger than i-th digit
      const j = arr.findIndex((digit) => digit > arr[i]);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      return +[...arr.slice(i).reverse(), ...arr.slice(0, i).sort()].join("");
    }
  }
  return -1;
}
