/** prioritize the streamed buffer from a numeric series. */
export function prioritizeReturnsStreamedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
