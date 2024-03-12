import assert from "assert";

type CompareFn = (a: number, b: number) => number;

interface DigitWithIndex {
  d: number;
  i: number;
}

/**
 * Algorithm
 *
 * 1. return -1 for numbers smaller than 11
 * 2. return -1 if number sequence is in descending order
 * 3. for double digits: compare and swap if needed
 * 4. for tripple and above:
 *   - moving from right to left find a digit 'x' which is smaller than its right neighbour
 *   - next find the next bigger digit 'y' in the sequence of digits to the right of 'x'
 *   - next swap positions of 'x' and 'y'
 *   - next sort the sequence of digits to the right of 'y' (which is at the position where 'x' was)
 *    => the result is the next bigger number
 */
export function nextBigger(n: number): number {
  assert(n >= 0, "number can not be negative");
  assert(Number.isInteger(n), "number must be an integer");

  if (n < 11) return -1;
  if (inDescendingOrder(n)) return -1;
  if (n < 99) return nextBiggerForDoubleDigits(n);
  return nextBiggerForTrippleDigitsAndAbove(n);
}

export function inDescendingOrder(n: number): boolean {
  const digits: number[] = toDigitArray(n);
  const greaterThanNextChecklist: boolean[] = digits.map(
    (digit: number, i: number) => {
      return isLast() ? true : isCurrentGreaterEualThanNext();

      function isLast(): boolean {
        return i === digits.length - 1;
      }

      function isCurrentGreaterEualThanNext(): boolean {
        return digit >= digits[i + 1];
      }
    }
  );

  const digitNotGreaterThanNextIndex: number =
    greaterThanNextChecklist.indexOf(false);
  const inDescendingOrder: boolean = digitNotGreaterThanNextIndex === -1;
  return inDescendingOrder;
}

export function toDigitArray(n: number): number[] {
  return [...n.toString(10)].map((member) => parseInt(member));
}

export function nextBiggerForDoubleDigits(n: number): number {
  const digits: number[] = toDigitArray(n);
  return digits[0] < digits[1] ? format(swap(0, 1, digits)) : -1;
}

export function nextBiggerForTrippleDigitsAndAbove(n: number): number {
  const digits: number[] = toDigitArray(n);
  const firstDigitSmaller: DigitWithIndex =
    findFirstDigitSmallerThanPrevious(digits);

  if (isFirstDigitInDigitArray()) return format(reorderToNextBigger(digits));

  const firstPiece: number[] = digits.slice(0, firstDigitSmaller.i);
  const secondPiece: number[] = digits.slice(firstDigitSmaller.i);
  const secondPieceReordered: number[] = reorderToNextBigger(secondPiece);
  return format(firstPiece.concat(secondPieceReordered));

  function isFirstDigitInDigitArray(): boolean {
    return firstDigitSmaller.i === 0;
  }
}

export function findFirstDigitSmallerThanPrevious(
  digits: number[]
): DigitWithIndex {
  const foundDigit: DigitWithIndex = { d: 0, i: 0 };
  let search: boolean = true;
  // search from right to left
  let i: number = digits.length - 1;
  while (search && i !== 0) {
    const leftDigit: number = digits[i - 1];
    const digitNextToIt: number = digits[i];
    if (leftDigit < digitNextToIt) {
      search = false;
      foundDigit.d = leftDigit;
      foundDigit.i = i - 1;
    }
    i--;
  }
  return foundDigit;
}

export function reorderToNextBigger(digits: number[]): number[] {
  const nextBigger: DigitWithIndex =
    findNextBiggerInSequenceOfFirstDigit(digits);
  const digitsWithPositionSwap: number[] = swap(0, nextBigger.i, digits);
  return [digitsWithPositionSwap[0], ...sort(digitsWithPositionSwap.slice(1))];
}

export function findNextBiggerInSequenceOfFirstDigit(
  digits: number[]
): DigitWithIndex {
  const first = digits[0];
  let prevDiff: number = digits[1] - first;
  let curDiff: number = digits[1] - first;
  let result: DigitWithIndex = { d: digits[1], i: 1 };

  for (let i = 1; i <= digits.length; i++) {
    if (first >= digits[i]) continue;

    curDiff = digits[i] - first;
    if (curDiff < prevDiff) {
      prevDiff = curDiff;
      result = { d: digits[i], i };
    }
  }

  return result;
}

export function swap(i1: number, i2: number, digits: number[]): number[] {
  const copy: number[] = [...digits];
  const tmp: number = copy[i1];
  copy[i1] = copy[i2];
  copy[i2] = tmp;
  return copy;
}

export function sort(digits: number[]): number[] {
  const compareFn: CompareFn = (a: number, b: number): number => a - b;
  const copy: number[] = [...digits];
  return copy.sort(compareFn);
}

export function format(n: number[]): number {
  return parseInt(n.join(""));
}
