import React from 'react';
import { deriveReturnsStableBuffer } from '../features/returns-derive-stable-buffer';

type ReturnsDeriveStableBufferCardProps = { values: readonly number[]; label?: string };
export function ReturnsDeriveStableBufferCard({ values, label = 'buffer' }: ReturnsDeriveStableBufferCardProps) {
  const value = deriveReturnsStableBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
