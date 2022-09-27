/** derive the typed buffer from a numeric series. */
export function deriveAccountsTypedBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
