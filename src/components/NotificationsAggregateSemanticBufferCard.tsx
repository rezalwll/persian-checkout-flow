import React from 'react';
import { aggregateNotificationsSemanticBuffer } from '../features/notifications-aggregate-semantic-buffer';

type NotificationsAggregateSemanticBufferCardProps = { values: readonly number[]; label?: string };
export function NotificationsAggregateSemanticBufferCard({ values, label = 'buffer' }: NotificationsAggregateSemanticBufferCardProps) {
  const value = aggregateNotificationsSemanticBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
