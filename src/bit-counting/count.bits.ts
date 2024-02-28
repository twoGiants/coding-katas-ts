import assert from "assert";

export function countBits(n: number): number {
  assert(n >= 0, "negative numbers are forbidden");
  const binaryString = toBinaryString(n);
  return countOnesIn(binaryString);
}

function toBinaryString(n: number): string {
  return n.toString(2);
}

function countOnesIn(binaryString: string): number {
  return (binaryString.match(/1/g) || []).length;
}
