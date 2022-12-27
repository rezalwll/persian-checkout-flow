import React from 'react';
import { groupStateValidatedBuffer } from '../features/state-group-validated-buffer';

type StateGroupValidatedBufferCardProps = { values: readonly number[]; label?: string };
export function StateGroupValidatedBufferCard({ values, label = 'buffer' }: StateGroupValidatedBufferCardProps) {
  const value = groupStateValidatedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
