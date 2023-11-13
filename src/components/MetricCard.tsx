import React from 'react';
import { calculateInitialTotal } from '../features/initial-total';

type MetricCardProps = { label: string; values: readonly number[] };
export function MetricCard({ label, values }: MetricCardProps) {
  return <section data-component="metric-card"><header><h2>{label}</h2></header><output aria-label={`${label}: calculated value`}>{calculateInitialTotal(values)}</output></section>;
}
