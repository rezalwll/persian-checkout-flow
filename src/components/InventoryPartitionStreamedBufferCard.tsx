import React from 'react';
import { partitionInventoryStreamedBuffer } from '../features/inventory-partition-streamed-buffer';

type InventoryPartitionStreamedBufferCardProps = { values: readonly number[]; label?: string };
export function InventoryPartitionStreamedBufferCard({ values, label = 'buffer' }: InventoryPartitionStreamedBufferCardProps) {
  const value = partitionInventoryStreamedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
