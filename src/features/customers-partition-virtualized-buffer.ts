/** partition the virtualized buffer from a numeric series. */
export function partitionCustomersVirtualizedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
