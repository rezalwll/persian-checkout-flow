import React from 'react';
import { deriveReportsValidatedBuffer } from '../features/reports-derive-validated-buffer';

type ReportsDeriveValidatedBufferCardProps = { values: readonly number[]; label?: string };
export function ReportsDeriveValidatedBufferCard({ values, label = 'buffer' }: ReportsDeriveValidatedBufferCardProps) {
  const value = deriveReportsValidatedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
