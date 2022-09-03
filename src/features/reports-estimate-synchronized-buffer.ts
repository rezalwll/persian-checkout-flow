/** estimate the synchronized buffer from a numeric series. */
export function estimateReportsSynchronizedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
