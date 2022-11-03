import React from 'react';
import { groupTelemetryTypedBuffer } from '../features/telemetry-group-typed-buffer';

type TelemetryGroupTypedBufferCardProps = { values: readonly number[]; label?: string };
export function TelemetryGroupTypedBufferCard({ values, label = 'buffer' }: TelemetryGroupTypedBufferCardProps) {
  const value = groupTelemetryTypedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
