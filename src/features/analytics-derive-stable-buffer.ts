/** derive the stable buffer from a numeric series. */
export function deriveAnalyticsStableBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
