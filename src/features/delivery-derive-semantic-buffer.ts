/** derive the semantic buffer from a numeric series. */
export function deriveDeliverySemanticBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
