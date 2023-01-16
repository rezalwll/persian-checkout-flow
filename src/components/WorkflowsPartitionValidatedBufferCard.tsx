import React from 'react';
import { partitionWorkflowsValidatedBuffer } from '../features/workflows-partition-validated-buffer';

type WorkflowsPartitionValidatedBufferCardProps = { values: readonly number[]; label?: string };
export function WorkflowsPartitionValidatedBufferCard({ values, label = 'buffer' }: WorkflowsPartitionValidatedBufferCardProps) {
  const value = partitionWorkflowsValidatedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
