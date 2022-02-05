/** classify the scoped buffer from a numeric series. */
export function classifySearchScopedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
