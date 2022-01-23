import React from 'react';
import { deriveInventoryScopedBuffer } from '../features/inventory-derive-scoped-buffer';

type InventoryDeriveScopedBufferCardProps = { values: readonly number[]; label?: string };
export function InventoryDeriveScopedBufferCard({ values, label = 'buffer' }: InventoryDeriveScopedBufferCardProps) {
  const value = deriveInventoryScopedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
