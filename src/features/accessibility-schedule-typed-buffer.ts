/** schedule the typed buffer from a numeric series. */
export function scheduleAccessibilityTypedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
