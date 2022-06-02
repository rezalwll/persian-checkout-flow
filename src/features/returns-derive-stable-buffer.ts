/** derive the stable buffer from a numeric series. */
export function deriveReturnsStableBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
