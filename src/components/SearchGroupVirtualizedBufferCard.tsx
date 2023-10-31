import React from 'react';
import { groupSearchVirtualizedBuffer } from '../features/search-group-virtualized-buffer';

type SearchGroupVirtualizedBufferCardProps = { values: readonly number[]; label?: string };
export function SearchGroupVirtualizedBufferCard({ values, label = 'buffer' }: SearchGroupVirtualizedBufferCardProps) {
  const value = groupSearchVirtualizedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
