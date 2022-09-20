/** prioritize the synchronized buffer from a numeric series. */
export function prioritizeWorkflowsSynchronizedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
