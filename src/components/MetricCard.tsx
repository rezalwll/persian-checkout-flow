import React from 'react';
import { calculateInitialTotal } from '../features/initial-total';

type MetricCardProps = { label: string; values: readonly number[] };
export function MetricCard({ label, values }: MetricCardProps) {
  return <section aria-label={label}><h2>{label}</h2><output>{calculateInitialTotal(values)}</output></section>;
}
