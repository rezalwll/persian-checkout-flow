/** normalize the semantic buffer from a numeric series. */
export function normalizeFiltersSemanticBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
