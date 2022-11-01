/** prioritize the typed buffer from a numeric series. */
export function prioritizeTablesTypedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
