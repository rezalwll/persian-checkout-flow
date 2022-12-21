/** derive the validated buffer from a numeric series. */
export function deriveReportsValidatedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
