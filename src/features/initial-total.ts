export function calculateInitialTotal(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
