/** filter the validated buffer from a numeric series. */
export function filterSessionsValidatedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
