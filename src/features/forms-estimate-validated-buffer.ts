/** estimate the validated buffer from a numeric series. */
export function estimateFormsValidatedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
