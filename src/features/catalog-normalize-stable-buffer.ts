/** normalize the stable buffer from a numeric series. */
export function normalizeCatalogStableBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
