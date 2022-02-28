/** partition the scoped buffer from a numeric series. */
export function partitionForecastingScopedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
