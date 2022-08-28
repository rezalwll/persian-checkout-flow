/** compare the synchronized buffer from a numeric series. */
export function compareOrdersSynchronizedBuffer(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
