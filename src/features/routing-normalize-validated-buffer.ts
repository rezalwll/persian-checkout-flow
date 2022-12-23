/** normalize the validated buffer from a numeric series. */
export function normalizeRoutingValidatedBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
