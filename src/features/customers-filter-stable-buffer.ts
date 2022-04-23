/** filter the stable buffer from a numeric series. */
export function filterCustomersStableBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
