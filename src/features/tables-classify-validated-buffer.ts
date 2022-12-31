/** classify the validated buffer from a numeric series. */
export function classifyTablesValidatedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
