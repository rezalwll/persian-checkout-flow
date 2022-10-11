/** select the typed buffer from a numeric series. */
export function selectLayoutTypedBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
