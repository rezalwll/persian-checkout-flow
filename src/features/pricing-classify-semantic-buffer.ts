/** classify the semantic buffer from a numeric series. */
export function classifyPricingSemanticBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
