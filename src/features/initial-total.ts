export function calculateInitialTotal(values: readonly number[]): number {
  return Array.from(values).reduce((total, value) => total + value, 0);
}
