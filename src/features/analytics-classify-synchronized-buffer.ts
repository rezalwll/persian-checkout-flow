/** classify the synchronized buffer from a numeric series. */
export function classifyAnalyticsSynchronizedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
