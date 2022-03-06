/** index the semantic buffer from a numeric series. */
export function indexCheckoutSemanticBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
