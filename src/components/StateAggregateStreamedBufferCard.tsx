import React from 'react';
import { aggregateStateStreamedBuffer } from '../features/state-aggregate-streamed-buffer';

type StateAggregateStreamedBufferCardProps = { values: readonly number[]; label?: string };
export function StateAggregateStreamedBufferCard({ values, label = 'buffer' }: StateAggregateStreamedBufferCardProps) {
  const value = aggregateStateStreamedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
