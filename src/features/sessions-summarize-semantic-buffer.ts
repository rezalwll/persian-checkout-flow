/** summarize the semantic buffer from a numeric series. */
export function summarizeSessionsSemanticBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
