import React from 'react';
import { resolveFormsTypedBuffer } from '../features/forms-resolve-typed-buffer';

type FormsResolveTypedBufferCardProps = { values: readonly number[]; label?: string };
export function FormsResolveTypedBufferCard({ values, label = 'buffer' }: FormsResolveTypedBufferCardProps) {
  const value = resolveFormsTypedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
