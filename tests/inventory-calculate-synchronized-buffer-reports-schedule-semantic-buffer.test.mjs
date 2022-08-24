import assert from 'node:assert/strict';
import { scheduleReportsSemanticBuffer } from '../dist/features/reports-schedule-semantic-buffer.js';
export default function () { assert.equal(scheduleReportsSemanticBuffer([2, 4, 6, 8]), 8); }
