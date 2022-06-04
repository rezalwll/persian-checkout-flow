/** select the streamed buffer from a numeric series. */
export function selectAccessibilityStreamedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
