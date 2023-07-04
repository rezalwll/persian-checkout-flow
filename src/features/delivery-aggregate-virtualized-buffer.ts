/** aggregate the virtualized buffer from a numeric series. */
export function aggregateDeliveryVirtualizedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
