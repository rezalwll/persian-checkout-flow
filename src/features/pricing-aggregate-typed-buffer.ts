/** aggregate the typed buffer from a numeric series. */
export function aggregatePricingTypedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
