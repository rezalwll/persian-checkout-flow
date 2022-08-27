/** group the synchronized buffer from a numeric series. */
export function groupLayoutSynchronizedBuffer(values: readonly number[]): number {
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
