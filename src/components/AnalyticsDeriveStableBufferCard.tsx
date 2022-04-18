import React from 'react';
import { deriveAnalyticsStableBuffer } from '../features/analytics-derive-stable-buffer';

type AnalyticsDeriveStableBufferCardProps = { values: readonly number[]; label?: string };
export function AnalyticsDeriveStableBufferCard({ values, label = 'buffer' }: AnalyticsDeriveStableBufferCardProps) {
  const value = deriveAnalyticsStableBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
