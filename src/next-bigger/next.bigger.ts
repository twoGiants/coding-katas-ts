import assert from "assert";

// [x] single digit numbers
// [x] sorted numbers
// [] continue here: double digit numbers
//  - move from the first digit to last and compare
//  - when you find the situation cur < prev you start the permutations
//  - perm: create array of checks for each number, the array tracks where the number was
//  - perm: start moving the chosen number to every position and track that in the array
//  - perm: store all perms larger than the original number
// [] add tests for isSorted and toDigitArray

/**
 *
 *
 Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
[
  [1,2,3],
  [2,3,1],
  [3,1,2],
]
 */

export function nextBigger(n: number): number {
  assert(n >= 0, "number can not be negative");
  assert(Number.isInteger(n), "number must be an integer");

  if (n < 11) return -1;

  if (isSorted(-1)) return -1;

  const digits = toDigitArray(n);

  return 0;
}

export function isSorted(n: number): boolean {
  const digits = toDigitArray(n);

  // 23 => [2, 3] => [false, true]
  // 32 => [3, 2] => [true, true]
  return (
    digits
      .map((digit: number, i: number) => {
        if (i === digits.length - 1) return true;

        return digit >= digits[i + 1];
      })
      .filter((grtNext: boolean) => grtNext === false).length > 0
  );
}

export function toDigitArray(n: number): number[] {
  return [...n.toString(10)].map((member) => parseInt(member));
}

export interface DigitWithIndex {
  d: number;
  i: number;
}

export function firstDigitSmallerThanPredecessor(
  digits: number[]
): DigitWithIndex {
  const digit: DigitWithIndex = { d: 0, i: 0 };
  let search: boolean = true;
  let i: number = digits.length - 1;
  while (search && i !== 0) {
    const curr = digits[i - 1];
    const prev = digits[i];
    if (curr < prev) {
      search = false;
      digit.d = curr;
      digit.i = i - 1;
    }
    i--;
  }
  return digit;
}
