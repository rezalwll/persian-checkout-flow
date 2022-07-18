/** calculate the streamed buffer from a numeric series. */
export function calculatePricingStreamedBuffer(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
