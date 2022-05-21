/** estimate the stable buffer from a numeric series. */
export function estimateTablesStableBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
