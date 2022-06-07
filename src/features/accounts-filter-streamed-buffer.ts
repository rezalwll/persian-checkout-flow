/** filter the streamed buffer from a numeric series. */
export function filterAccountsStreamedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
