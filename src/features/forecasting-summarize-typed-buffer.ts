/** summarize the typed buffer from a numeric series. */
export function summarizeForecastingTypedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
