/** index the scoped buffer from a numeric series. */
export function indexFormsScopedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
