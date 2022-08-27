/** resolve the synchronized buffer from a numeric series. */
export function resolveNavigationSynchronizedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
