/** select the virtualized buffer from a numeric series. */
export function selectPricingVirtualizedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
