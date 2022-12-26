/** prioritize the validated buffer from a numeric series. */
export function prioritizeSettingsValidatedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
