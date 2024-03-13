export class Game {
  #rolls: number[] = [];
  #currentRoll: number = 0;

  roll(pins: number): void {
    this.#rolls[this.#currentRoll++] = pins;
  }

  score(): number {
    let score = 0;
    for (let frame = 0, frameIndex = 0; frame < 10; frame++) {
      if (this.#isStrike(frameIndex)) {
        score += 10 + this.#strikeBonus(frameIndex);
        frameIndex++;
      } else if (this.#isSpare(frameIndex)) {
        score += 10 + this.#spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += this.#subOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }

    return score;
  }

  #strikeBonus(frameIndex: number): number {
    return this.#rolls[frameIndex + 1] + this.#rolls[frameIndex + 2];
  }

  #spareBonus(frameIndex: number): number {
    return this.#rolls[frameIndex + 2];
  }

  #isSpare(frameIndex: number): boolean {
    return this.#rolls[frameIndex] + this.#rolls[frameIndex + 1] === 10;
  }

  #isStrike(frameIndex: number): boolean {
    return this.#rolls[frameIndex] === 10;
  }

  #subOfBallsInFrame(frameIndex: number): number {
    return this.#rolls[frameIndex] + this.#rolls[frameIndex + 1];
  }
}
