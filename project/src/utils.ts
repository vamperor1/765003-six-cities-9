export function setKeys(keysCount: number): number[] {
  return new Array(keysCount).fill(0).map((it, i) => it = i + 1);
}
