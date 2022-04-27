/** classify the stable buffer from a numeric series. */
export function classifyInventoryStableBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
