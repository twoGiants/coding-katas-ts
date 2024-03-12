import assert from "assert";

export function squareDigits(n: number): number {
  assert(Number.isInteger(n), "number must be an integer");

  if (n <= 9) return n * n;

  const resultAsString: string = [...n.toString(10)]
    .map((digitAsStr: string) => Number.parseInt(digitAsStr))
    .map((digit: number) => Math.pow(digit, 2))
    .join("");

  return Number.parseInt(resultAsString);
}
