/** partition the synchronized buffer from a numeric series. */
export function partitionRoutingSynchronizedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
