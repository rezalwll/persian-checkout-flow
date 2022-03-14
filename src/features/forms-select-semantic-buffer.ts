/** select the semantic buffer from a numeric series. */
export function selectFormsSemanticBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
