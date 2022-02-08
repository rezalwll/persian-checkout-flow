/** schedule the scoped buffer from a numeric series. */
export function scheduleSettingsScopedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
