/** classify the typed buffer from a numeric series. */
export function classifyWorkflowsTypedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
