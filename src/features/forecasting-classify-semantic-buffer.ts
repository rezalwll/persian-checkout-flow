/** classify the semantic buffer from a numeric series. */
export function classifyForecastingSemanticBuffer(values: readonly number[]): number {
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
