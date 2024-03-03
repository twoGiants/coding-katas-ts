import {
  firstDigitSmallerThanPredecessor as firstSmaller,
  nextBigger,
  toDigitArray,
} from "./next.bigger";

describe("Basic tests", () => {
  it("Small numbers", () => {
    // expect(nextBigger(12)).toBe(21);
    // expect(nextBigger(513)).toBe(531);
    // expect(nextBigger(2017)).toBe(2071);
    // expect(nextBigger(2127)).toBe(2071);
    // expect(nextBigger(414)).toBe(441);
    // expect(nextBigger(144)).toBe(414);
    expect(nextBigger(531)).toBe(-1);
    expect(nextBigger(111)).toBe(-1);
    expect(nextBigger(9)).toBe(-1);
  });

  it("Bigger numbers", () => {
    // expect(nextBigger(123456789)).toBe(123456798);
    // expect(nextBigger(1234567890)).toBe(1234567908);
    // 890 => 908
    // 891 => 918
    // 801 => 810
    // 199 => 919
    // 1999 => 9199
    // 199 => 991
    expect(nextBigger(9876543210)).toBe(-1);
    expect(nextBigger(9999999999)).toBe(-1);
    // expect(nextBigger(19999999999)).toBe(-1);
    // expect(nextBigger(59884848459853)).toBe(59884848483559);
    // expect(nextBigger(37391204917)).toBe();
  });

  describe(".firstSmaller", () => {
    it("finds 1 in 12", () => {
      expect(firstSmaller(toDigitArray(12))).toEqual({ d: 1, i: 0 });
    });

    it("finds 1 in 513", () => {
      expect(firstSmaller(toDigitArray(513))).toEqual({
        d: 1,
        i: 1,
      });
    });

    it("finds 1 in 2017", () => {
      expect(firstSmaller(toDigitArray(2017))).toEqual({
        d: 1,
        i: 2,
      });
    });

    it("finds 1 in 414", () => {
      expect(firstSmaller(toDigitArray(414))).toEqual({
        d: 1,
        i: 1,
      });
    });

    it("finds 1 in 144", () => {
      expect(firstSmaller(toDigitArray(144))).toEqual({
        d: 1,
        i: 0,
      });
    });

    it("finds 8 in 123456789", () => {
      expect(firstSmaller(toDigitArray(123456789))).toEqual({
        d: 8,
        i: 7,
      });
    });

    it("finds 8 in 1234567890", () => {
      expect(firstSmaller(toDigitArray(1234567890))).toEqual({
        d: 8,
        i: 7,
      });
    });

    it("finds 5 in 59884848459853", () => {
      expect(firstSmaller(toDigitArray(59884848459853))).toEqual({
        d: 5,
        i: 9,
      });
    });
  });
});
