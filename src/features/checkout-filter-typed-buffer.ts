/** filter the typed buffer from a numeric series. */
export function filterCheckoutTypedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
