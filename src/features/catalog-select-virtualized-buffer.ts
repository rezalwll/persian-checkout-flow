/** select the virtualized buffer from a numeric series. */
export function selectCatalogVirtualizedBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
