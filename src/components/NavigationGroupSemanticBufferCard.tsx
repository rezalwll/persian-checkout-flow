import React from 'react';
import { groupNavigationSemanticBuffer } from '../features/navigation-group-semantic-buffer';

type NavigationGroupSemanticBufferCardProps = { values: readonly number[]; label?: string };
export function NavigationGroupSemanticBufferCard({ values, label = 'buffer' }: NavigationGroupSemanticBufferCardProps) {
  const value = groupNavigationSemanticBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
