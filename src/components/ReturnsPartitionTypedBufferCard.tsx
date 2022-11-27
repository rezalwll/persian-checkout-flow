import React from 'react';
import { partitionReturnsTypedBuffer } from '../features/returns-partition-typed-buffer';

type ReturnsPartitionTypedBufferCardProps = { values: readonly number[]; label?: string };
export function ReturnsPartitionTypedBufferCard({ values, label = 'buffer' }: ReturnsPartitionTypedBufferCardProps) {
  const value = partitionReturnsTypedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
