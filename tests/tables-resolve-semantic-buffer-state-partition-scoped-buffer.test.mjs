import assert from 'node:assert/strict';
import { partitionStateScopedBuffer } from '../dist/features/state-partition-scoped-buffer.js';
export default function () { assert.equal(partitionStateScopedBuffer([2, 4, 6, 8]), 6); }
