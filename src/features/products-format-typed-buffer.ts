/** format the typed buffer from a numeric series. */
export function formatProductsTypedBuffer(values: readonly number[]): number {
  return values.length ? [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)] : 0;
}
