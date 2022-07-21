import React from 'react';
import { resolveReportsStreamedBuffer } from '../features/reports-resolve-streamed-buffer';

type ReportsResolveStreamedBufferCardProps = { values: readonly number[]; label?: string };
export function ReportsResolveStreamedBufferCard({ values, label = 'buffer' }: ReportsResolveStreamedBufferCardProps) {
  const value = resolveReportsStreamedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
