/** normalize the synchronized buffer from a numeric series. */
export function normalizeTeamsSynchronizedBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
