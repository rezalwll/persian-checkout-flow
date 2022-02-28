/** estimate the scoped buffer from a numeric series. */
export function estimateReturnsScopedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
