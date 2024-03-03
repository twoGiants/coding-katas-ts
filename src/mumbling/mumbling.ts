export function accum(s: string): string {
  return [...s.toUpperCase()]
    .map((l, i) => l + l.toLowerCase().repeat(i))
    .join("-");
}

/**
 * [x] uppercase all letters
 * [x] duplicate according to index with lowercase letters
 * [x] join("-")
 */
export function accumV2(s: string): string {
  return [...s.toUpperCase()]
    .map((l, i) => (i === 0 ? l : mumble(l, i)))
    .join("-");

  function mumble(letter: string, count: number): string {
    let result = letter;
    for (; count !== 0; count--) result += letter.toLowerCase();
    return result;
  }
}
