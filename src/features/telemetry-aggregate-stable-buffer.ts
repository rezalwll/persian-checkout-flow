/** aggregate the stable buffer from a numeric series. */
export function aggregateTelemetryStableBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
