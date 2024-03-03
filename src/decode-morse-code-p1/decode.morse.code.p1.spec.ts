import { decodeMorse } from "./decode.morse.code.p1";

describe("Example from description", function () {
  it("HEY JUDE", () => {
    const result = decodeMorse(".... . -.--   .--- ..- -.. .");
    expect(result).toBe("HEY JUDE");
  });
});

describe("Your own tests", function () {
  it("SOS", () => {
    const result = decodeMorse("...---...");
    expect(result).toBe("SOS");
  });
});
