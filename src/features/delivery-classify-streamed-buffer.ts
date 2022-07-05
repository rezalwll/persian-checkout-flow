/** classify the streamed buffer from a numeric series. */
export function classifyDeliveryStreamedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
