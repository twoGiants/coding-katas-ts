import { countBits } from "./count.bits";

describe("countBits", function () {
  it("negative numbers are forbidden", function () {
    expect(() => countBits(-1)).toThrow("negative numbers are forbidden");
  });

  it("number 0 has no used '1' bits", function () {
    expect(countBits(0)).toBe(0);
  });

  it("number 4 has one used '1' bit", function () {
    expect(countBits(4)).toBe(1);
  });

  it("number 7 has three used '1' bits", function () {
    expect(countBits(7)).toBe(3);
  });

  it("number 9 has two used '1' bits", function () {
    expect(countBits(9)).toBe(2);
  });

  it("number 10 has two used '1' bits", function () {
    expect(countBits(10)).toBe(2);
  });

  it("number 2246075068306275 has 30 used '1' bits", function () {
    expect(countBits(2246075068306275)).toBe(30);
  });
});
