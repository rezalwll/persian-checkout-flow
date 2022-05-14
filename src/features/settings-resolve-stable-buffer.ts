/** resolve the stable buffer from a numeric series. */
export function resolveSettingsStableBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
