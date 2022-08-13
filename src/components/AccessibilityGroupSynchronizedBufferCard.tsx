import React from 'react';
import { groupAccessibilitySynchronizedBuffer } from '../features/accessibility-group-synchronized-buffer';

type AccessibilityGroupSynchronizedBufferCardProps = { values: readonly number[]; label?: string };
export function AccessibilityGroupSynchronizedBufferCard({ values, label = 'buffer' }: AccessibilityGroupSynchronizedBufferCardProps) {
  const value = groupAccessibilitySynchronizedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
