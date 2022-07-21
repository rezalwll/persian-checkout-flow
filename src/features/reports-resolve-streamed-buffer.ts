/** resolve the streamed buffer from a numeric series. */
export function resolveReportsStreamedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
