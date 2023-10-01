/** filter the virtualized buffer from a numeric series. */
export function filterProductsVirtualizedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
