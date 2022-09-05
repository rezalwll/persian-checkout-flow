/** aggregate the synchronized buffer from a numeric series. */
export function aggregateSearchSynchronizedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
