/** aggregate the semantic buffer from a numeric series. */
export function aggregateNotificationsSemanticBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
