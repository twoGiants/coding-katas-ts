import {
  findNextBiggerInSequenceOfFirstDigit,
  findFirstDigitSmallerThanPrevious,
  nextBigger,
  toDigitArray,
  swap,
  sort,
} from "./next.bigger";

describe("Basic tests", () => {
  it("double digits are switched if first digit is smaler than the second", () => {
    expect(nextBigger(12)).toBe(21);
    expect(nextBigger(19)).toBe(91);
  });

  it("returns -1 if first digit is larger than the second", () => {
    expect(nextBigger(21)).toBe(-1);
    expect(nextBigger(65)).toBe(-1);
  });

  it("Small numbers", () => {
    expect(nextBigger(12)).toBe(21);
    expect(nextBigger(513)).toBe(531);
    expect(nextBigger(2017)).toBe(2071);
    expect(nextBigger(414)).toBe(441);
    expect(nextBigger(144)).toBe(414);
    expect(nextBigger(531)).toBe(-1);
    expect(nextBigger(111)).toBe(-1);
    expect(nextBigger(9)).toBe(-1);
  });

  it("Bigger numbers", () => {
    expect(nextBigger(123456789)).toBe(123456798);
    expect(nextBigger(1234567890)).toBe(1234567908);
    expect(nextBigger(9876543210)).toBe(-1);
    expect(nextBigger(9999999999)).toBe(-1);
    expect(nextBigger(59884848459853)).toBe(59884848483559);
    expect(nextBigger(59853)).toBe(83559);
    expect(nextBigger(459853)).toBe(483559);
  });

  describe(".swap", () => {
    it("swaps positions of first and last of 123", () => {
      const digits = [1, 2, 3];
      const result = swap(0, 2, digits);
      expect(result).toEqual([3, 2, 1]);
    });

    it("swaps positions of first and second to last of 1235", () => {
      const digits = [1, 2, 3, 5];
      const result = swap(0, 2, digits);
      expect(result).toEqual([3, 2, 1, 5]);
    });

    it("swaps positions of first and second to last of 59853", () => {
      const digits = [5, 9, 8, 5, 3];
      const result = swap(3, 4, digits);
      expect(result).toEqual([5, 9, 8, 3, 5]);
    });
  });

  describe(".sort()", () => {
    it("sorts in ascending order", () => {
      const testCases = [
        {
          digits: [5, 9, 8, 5, 3],
          expected: [3, 5, 5, 8, 9],
        },
        {
          digits: [5, 9, 8, 8, 4, 8, 4, 8, 4, 5, 9, 8, 5, 3],
          expected: [3, 4, 4, 4, 5, 5, 5, 8, 8, 8, 8, 8, 9, 9],
        },
        {
          digits: [2, 1, 2, 7],
          expected: [1, 2, 2, 7],
        },
        {
          digits: [4, 1, 0, 4],
          expected: [0, 1, 4, 4],
        },
      ];
      testCases.forEach((testCase) => {
        const result = sort(testCase.digits);
        expect(result).toEqual(testCase.expected);
      });
    });
  });

  describe(".nextBiggerInSequenceOfFirstDigit", () => {
    it("finds 3 in 143", () => {
      const digits = [1, 4, 3];
      const result = findNextBiggerInSequenceOfFirstDigit(digits);

      expect(result).toEqual({ d: 3, i: 2 });
    });

    it("finds 8 in 59853", () => {
      const digits = [5, 9, 8, 5, 3];
      const result = findNextBiggerInSequenceOfFirstDigit(digits);

      expect(result).toEqual({ d: 8, i: 2 });
    });

    it("finds 8 in 5853", () => {
      const digits = [5, 8, 5, 3];
      const result = findNextBiggerInSequenceOfFirstDigit(digits);

      expect(result).toEqual({ d: 8, i: 1 });
    });

    it("finds 1 in 071", () => {
      const digits = [0, 7, 1];
      const result = findNextBiggerInSequenceOfFirstDigit(digits);

      expect(result).toEqual({ d: 1, i: 2 });
    });
  });

  describe(".firstSmaller", () => {
    it("finds 1 in 12", () => {
      expect(findFirstDigitSmallerThanPrevious(toDigitArray(12))).toEqual({
        d: 1,
        i: 0,
      });
    });

    it("finds 1 in 513", () => {
      expect(findFirstDigitSmallerThanPrevious(toDigitArray(513))).toEqual({
        d: 1,
        i: 1,
      });
    });

    it("finds 1 in 2017", () => {
      expect(findFirstDigitSmallerThanPrevious(toDigitArray(2017))).toEqual({
        d: 1,
        i: 2,
      });
    });

    it("finds 1 in 414", () => {
      expect(findFirstDigitSmallerThanPrevious(toDigitArray(414))).toEqual({
        d: 1,
        i: 1,
      });
    });

    it("finds 1 in 144", () => {
      expect(findFirstDigitSmallerThanPrevious(toDigitArray(144))).toEqual({
        d: 1,
        i: 0,
      });
    });

    it("finds 8 in 123456789", () => {
      expect(
        findFirstDigitSmallerThanPrevious(toDigitArray(123456789))
      ).toEqual({
        d: 8,
        i: 7,
      });
    });

    it("finds 8 in 1234567890", () => {
      expect(
        findFirstDigitSmallerThanPrevious(toDigitArray(1234567890))
      ).toEqual({
        d: 8,
        i: 7,
      });
    });

    it("finds 5 in 59884848459853", () => {
      expect(
        findFirstDigitSmallerThanPrevious(toDigitArray(59884848459853))
      ).toEqual({
        d: 5,
        i: 9,
      });
    });
  });
});
