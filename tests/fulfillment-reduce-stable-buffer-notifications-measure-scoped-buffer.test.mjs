import assert from 'node:assert/strict';
import { measureNotificationsScopedBuffer } from '../dist/features/notifications-measure-scoped-buffer.js';
export default function () { assert.equal(measureNotificationsScopedBuffer([2, 4, 6, 8]), 8); }
