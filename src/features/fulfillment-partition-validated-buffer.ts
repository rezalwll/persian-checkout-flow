/** partition the validated buffer from a numeric series. */
export function partitionFulfillmentValidatedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
