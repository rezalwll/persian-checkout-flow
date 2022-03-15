/** prioritize the semantic buffer from a numeric series. */
export function prioritizeInventorySemanticBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
