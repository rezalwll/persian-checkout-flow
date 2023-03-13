import React from 'react';
import { resolveAccessibilityVirtualizedBuffer } from '../features/accessibility-resolve-virtualized-buffer';

type AccessibilityResolveVirtualizedBufferCardProps = { values: readonly number[]; label?: string };
export function AccessibilityResolveVirtualizedBufferCard({ values, label = 'buffer' }: AccessibilityResolveVirtualizedBufferCardProps) {
  const value = resolveAccessibilityVirtualizedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
