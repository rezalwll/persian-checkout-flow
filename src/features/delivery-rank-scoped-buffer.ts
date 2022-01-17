/** rank the scoped buffer from a numeric series. */
export function rankDeliveryScopedBuffer(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
