import React from 'react';
import { resolveCheckoutValidatedBuffer } from '../features/checkout-resolve-validated-buffer';

type CheckoutResolveValidatedBufferCardProps = { values: readonly number[]; label?: string };
export function CheckoutResolveValidatedBufferCard({ values, label = 'buffer' }: CheckoutResolveValidatedBufferCardProps) {
  const value = resolveCheckoutValidatedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
