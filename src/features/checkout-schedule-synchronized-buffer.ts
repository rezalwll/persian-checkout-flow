/** schedule the synchronized buffer from a numeric series. */
export function scheduleCheckoutSynchronizedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
