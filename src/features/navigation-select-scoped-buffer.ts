/** select the scoped buffer from a numeric series. */
export function selectNavigationScopedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
