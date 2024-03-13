import { Game } from "./bowling.game";

describe("Bowling Game", () => {
  let g: Game;

  beforeEach(() => {
    g = new Game();
  });

  function rollMany(n: number, pins: number) {
    for (let i = 0; i < n; i++) g.roll(pins);
  }

  it("gutter game", () => {
    rollMany(20, 0);
    expect(g.score()).toBe(0);
  });

  it("all ones", () => {
    rollMany(20, 1);
    expect(g.score()).toBe(20);
  });

  it("one spare", () => {
    rollSpare();
    g.roll(3);
    rollMany(17, 0);
    expect(g.score()).toBe(16);
  });

  it("one strike", () => {
    rollStrike();
    g.roll(3);
    g.roll(4);
    rollMany(16, 0);
    expect(g.score()).toBe(24);
  });

  it("perfect game", () => {
    rollMany(12, 10);
    expect(g.score()).toBe(300);
  });

  function rollSpare() {
    g.roll(5);
    g.roll(5);
  }

  function rollStrike() {
    g.roll(10);
  }
});
