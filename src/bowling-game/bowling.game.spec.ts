import { BowlingGame } from "./bowling.game";

describe("BowlingGame", () => {
  let g: BowlingGame;

  beforeEach(() => {
    g = new BowlingGame();
  });

  it("should score no points if all bowling bowls go into the gutter", () => {
    rollMany(20, 0);
    expect(g.score()).toBe(0);
  });

  it("should score 20 points if one pin was hit on each roll", () => {
    rollMany(20, 1);
    expect(g.score()).toBe(20);
  });

  it("should score one spare", () => {
    rollSpare();
    g.roll(3);
    rollMany(17, 0);
    expect(g.score()).toBe(16);
  });

  it("should score one strike", () => {
    rollStrike();
    g.roll(3);
    g.roll(4);
    rollMany(18, 0);
    expect(g.score()).toBe(24);
  });

  it("should score a perfect game", () => {
    rollMany(12, 10);
    expect(g.score()).toBe(300);
  });

  function rollMany(times: number, pins: number) {
    for (let i = 0; i < times; i++) g.roll(pins);
  }

  function rollSpare() {
    g.roll(5);
    g.roll(5);
  }

  function rollStrike() {
    g.roll(10);
  }
});
