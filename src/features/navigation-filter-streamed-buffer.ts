/** filter the streamed buffer from a numeric series. */
export function filterNavigationStreamedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
