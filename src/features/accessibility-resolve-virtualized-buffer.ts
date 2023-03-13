/** resolve the virtualized buffer from a numeric series. */
export function resolveAccessibilityVirtualizedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
