import React from 'react';
import { groupCheckoutStreamedBuffer } from '../features/checkout-group-streamed-buffer';

type CheckoutGroupStreamedBufferCardProps = { values: readonly number[]; label?: string };
export function CheckoutGroupStreamedBufferCard({ values, label = 'buffer' }: CheckoutGroupStreamedBufferCardProps) {
  const value = groupCheckoutStreamedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
