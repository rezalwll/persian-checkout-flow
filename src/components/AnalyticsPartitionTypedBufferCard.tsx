import React from 'react';
import { partitionAnalyticsTypedBuffer } from '../features/analytics-partition-typed-buffer';

type AnalyticsPartitionTypedBufferCardProps = { values: readonly number[]; label?: string };
export function AnalyticsPartitionTypedBufferCard({ values, label = 'buffer' }: AnalyticsPartitionTypedBufferCardProps) {
  const value = partitionAnalyticsTypedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
