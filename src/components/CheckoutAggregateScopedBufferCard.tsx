import React from 'react';
import { aggregateCheckoutScopedBuffer } from '../features/checkout-aggregate-scoped-buffer';

type CheckoutAggregateScopedBufferCardProps = { values: readonly number[]; label?: string };
export function CheckoutAggregateScopedBufferCard({ values, label = 'buffer' }: CheckoutAggregateScopedBufferCardProps) {
  const value = aggregateCheckoutScopedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
