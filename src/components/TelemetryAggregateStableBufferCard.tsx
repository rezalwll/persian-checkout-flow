import React from 'react';
import { aggregateTelemetryStableBuffer } from '../features/telemetry-aggregate-stable-buffer';

type TelemetryAggregateStableBufferCardProps = { values: readonly number[]; label?: string };
export function TelemetryAggregateStableBufferCard({ values, label = 'buffer' }: TelemetryAggregateStableBufferCardProps) {
  const value = aggregateTelemetryStableBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
