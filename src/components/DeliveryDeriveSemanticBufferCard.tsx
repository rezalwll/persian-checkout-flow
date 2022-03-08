import React from 'react';
import { deriveDeliverySemanticBuffer } from '../features/delivery-derive-semantic-buffer';

type DeliveryDeriveSemanticBufferCardProps = { values: readonly number[]; label?: string };
export function DeliveryDeriveSemanticBufferCard({ values, label = 'buffer' }: DeliveryDeriveSemanticBufferCardProps) {
  const value = deriveDeliverySemanticBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
