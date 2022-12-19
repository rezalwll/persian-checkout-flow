/** index the validated buffer from a numeric series. */
export function indexPricingValidatedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
