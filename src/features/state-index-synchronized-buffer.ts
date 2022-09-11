/** index the synchronized buffer from a numeric series. */
export function indexStateSynchronizedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
