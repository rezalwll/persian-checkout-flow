import React from 'react';
import { partitionPricingStableBuffer } from '../features/pricing-partition-stable-buffer';

type PricingPartitionStableBufferCardProps = { values: readonly number[]; label?: string };
export function PricingPartitionStableBufferCard({ values, label = 'buffer' }: PricingPartitionStableBufferCardProps) {
  const value = partitionPricingStableBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
