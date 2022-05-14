import React from 'react';
import { resolveSettingsStableBuffer } from '../features/settings-resolve-stable-buffer';

type SettingsResolveStableBufferCardProps = { values: readonly number[]; label?: string };
export function SettingsResolveStableBufferCard({ values, label = 'buffer' }: SettingsResolveStableBufferCardProps) {
  const value = resolveSettingsStableBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
