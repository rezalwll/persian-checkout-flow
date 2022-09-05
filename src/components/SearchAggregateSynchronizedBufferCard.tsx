import React from 'react';
import { aggregateSearchSynchronizedBuffer } from '../features/search-aggregate-synchronized-buffer';

type SearchAggregateSynchronizedBufferCardProps = { values: readonly number[]; label?: string };
export function SearchAggregateSynchronizedBufferCard({ values, label = 'buffer' }: SearchAggregateSynchronizedBufferCardProps) {
  const value = aggregateSearchSynchronizedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
