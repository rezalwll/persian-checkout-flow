/** partition the typed buffer from a numeric series. */
export function partitionReturnsTypedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
