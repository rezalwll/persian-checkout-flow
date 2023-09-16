/** normalize the virtualized buffer from a numeric series. */
export function normalizeOrdersVirtualizedBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
