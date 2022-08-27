import React from 'react';
import { resolveNavigationSynchronizedBuffer } from '../features/navigation-resolve-synchronized-buffer';

type NavigationResolveSynchronizedBufferCardProps = { values: readonly number[]; label?: string };
export function NavigationResolveSynchronizedBufferCard({ values, label = 'buffer' }: NavigationResolveSynchronizedBufferCardProps) {
  const value = resolveNavigationSynchronizedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
