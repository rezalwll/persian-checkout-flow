/** filter the scoped buffer from a numeric series. */
export function filterTablesScopedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
