import React from 'react';
import { aggregateInventoryValidatedBuffer } from '../features/inventory-aggregate-validated-buffer';

type InventoryAggregateValidatedBufferCardProps = { values: readonly number[]; label?: string };
export function InventoryAggregateValidatedBufferCard({ values, label = 'buffer' }: InventoryAggregateValidatedBufferCardProps) {
  const value = aggregateInventoryValidatedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
