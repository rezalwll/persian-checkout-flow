/** group the validated buffer from a numeric series. */
export function groupForecastingValidatedBuffer(values: readonly number[]): number {
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
