import { squareDigits } from "./square.every.digit";

describe("squareDigits", () => {
  it("square and concat of 0 is 0", () => {
    expect(squareDigits(0)).toBe(0);
  });

  it("square and concat of 9119 is 811181", () => {
    expect(squareDigits(9119)).toBe(811181);
  });

  it("digital root of 765 is 493625", () => {
    expect(squareDigits(765)).toBe(493625);
  });
});
