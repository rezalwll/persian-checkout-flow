/** aggregate the scoped buffer from a numeric series. */
export function aggregateCheckoutScopedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
