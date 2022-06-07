/** prioritize the streamed buffer from a numeric series. */
export function prioritizeAnalyticsStreamedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
