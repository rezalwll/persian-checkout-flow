/** aggregate the streamed buffer from a numeric series. */
export function aggregateStateStreamedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
