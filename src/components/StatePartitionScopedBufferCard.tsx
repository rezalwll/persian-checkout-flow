import React from 'react';
import { partitionStateScopedBuffer } from '../features/state-partition-scoped-buffer';

type StatePartitionScopedBufferCardProps = { values: readonly number[]; label?: string };
export function StatePartitionScopedBufferCard({ values, label = 'buffer' }: StatePartitionScopedBufferCardProps) {
  const value = partitionStateScopedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
