import React from 'react';
import { aggregateDeliveryVirtualizedBuffer } from '../features/delivery-aggregate-virtualized-buffer';

type DeliveryAggregateVirtualizedBufferCardProps = { values: readonly number[]; label?: string };
export function DeliveryAggregateVirtualizedBufferCard({ values, label = 'buffer' }: DeliveryAggregateVirtualizedBufferCardProps) {
  const value = aggregateDeliveryVirtualizedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
