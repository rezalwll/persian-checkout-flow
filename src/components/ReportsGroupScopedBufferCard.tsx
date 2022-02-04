import React from 'react';
import { groupReportsScopedBuffer } from '../features/reports-group-scoped-buffer';

type ReportsGroupScopedBufferCardProps = { values: readonly number[]; label?: string };
export function ReportsGroupScopedBufferCard({ values, label = 'buffer' }: ReportsGroupScopedBufferCardProps) {
  const value = groupReportsScopedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
