/** measure the validated buffer from a numeric series. */
export function measureDeliveryValidatedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
