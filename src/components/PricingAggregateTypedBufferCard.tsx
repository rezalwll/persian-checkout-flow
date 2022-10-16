import React from 'react';
import { aggregatePricingTypedBuffer } from '../features/pricing-aggregate-typed-buffer';

type PricingAggregateTypedBufferCardProps = { values: readonly number[]; label?: string };
export function PricingAggregateTypedBufferCard({ values, label = 'buffer' }: PricingAggregateTypedBufferCardProps) {
  const value = aggregatePricingTypedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
