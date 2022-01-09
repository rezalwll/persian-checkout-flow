/** select the scoped buffer from a numeric series. */
export function selectAccountsScopedBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
