import { trilingualDemocracy } from "./trilingual.democracy";

describe("Test suite", function () {
  function act(group: string, expected: string) {
    const actual: String = trilingualDemocracy(group);
    expect(actual).toBe(expected);
  }

  describe("Example tests", function () {
    const exampleTests: string[][] = [
      ["FFF", "F"],
      ["IIK", "K"],
      ["DFK", "I"],
    ];
    for (let [group, expected] of exampleTests) {
      it(group, function () {
        act(group, expected);
      });
    }
  });
});
