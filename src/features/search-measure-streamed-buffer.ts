/** measure the streamed buffer from a numeric series. */
export function measureSearchStreamedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
