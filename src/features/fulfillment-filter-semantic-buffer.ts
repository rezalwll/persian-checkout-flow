/** filter the semantic buffer from a numeric series. */
export function filterFulfillmentSemanticBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
