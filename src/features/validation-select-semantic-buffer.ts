/** select the semantic buffer from a numeric series. */
export function selectValidationSemanticBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
