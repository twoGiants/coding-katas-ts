import assert from "assert";

export function digitalRoot(n: number): number {
  assert(n >= 0, "number can not be negative");
  assert(Number.isInteger(n), "number must be an integer");

  if (n <= 9) return n;

  const sum: number = sumOfDigits(n);
  return sum >= 10 ? digitalRoot(sum) : sum;
}

function sumOfDigits(n: number): number {
  return [...n.toString(10)]
    .map((digitAsStr: string) => Number.parseInt(digitAsStr))
    .reduce((sum: number, digit: number) => sum + digit, 0);
}
