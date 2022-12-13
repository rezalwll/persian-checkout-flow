/** aggregate the validated buffer from a numeric series. */
export function aggregateInventoryValidatedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
