/** derive the streamed buffer from a numeric series. */
export function deriveFulfillmentStreamedBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
