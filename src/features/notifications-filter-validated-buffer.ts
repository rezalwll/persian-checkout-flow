/** filter the validated buffer from a numeric series. */
export function filterNotificationsValidatedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
