/** resolve the typed buffer from a numeric series. */
export function resolveFormsTypedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
