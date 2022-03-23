/** schedule the semantic buffer from a numeric series. */
export function scheduleReportsSemanticBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
