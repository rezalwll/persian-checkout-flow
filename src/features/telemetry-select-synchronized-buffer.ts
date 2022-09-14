/** select the synchronized buffer from a numeric series. */
export function selectTelemetrySynchronizedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
