/** summarize the streamed buffer from a numeric series. */
export function summarizeLayoutStreamedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
