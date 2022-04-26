import React from 'react';
import { groupFormsStableBuffer } from '../features/forms-group-stable-buffer';

type FormsGroupStableBufferCardProps = { values: readonly number[]; label?: string };
export function FormsGroupStableBufferCard({ values, label = 'buffer' }: FormsGroupStableBufferCardProps) {
  const value = groupFormsStableBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
