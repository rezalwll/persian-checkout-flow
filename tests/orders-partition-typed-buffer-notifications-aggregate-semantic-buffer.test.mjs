import assert from 'node:assert/strict';
import { aggregateNotificationsSemanticBuffer } from '../dist/features/notifications-aggregate-semantic-buffer.js';
export default function () { assert.equal(aggregateNotificationsSemanticBuffer([2, 4, 6, 8]), 4); }
