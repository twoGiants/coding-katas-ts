import { digitalRoot } from "./digital.root";

describe("digitalRoot", () => {
  it("digital root of 1 is 1", () => {
    expect(digitalRoot(1)).toBe(1);
  });

  it("digital root of 16 is 7", () => {
    expect(digitalRoot(16)).toBe(7);
  });

  it("digital root of 456 is 6", () => {
    expect(digitalRoot(456)).toBe(6);
  });

  it("digital root of 132189 is 6", () => {
    expect(digitalRoot(132189)).toBe(6);
  });

  it("digital root of 493193 is 2", () => {
    expect(digitalRoot(493193)).toBe(2);
  });
});
