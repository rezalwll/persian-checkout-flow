/** index the stable buffer from a numeric series. */
export function indexAccessibilityStableBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
