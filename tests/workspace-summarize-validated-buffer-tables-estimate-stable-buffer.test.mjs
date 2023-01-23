import assert from 'node:assert/strict';
import { estimateTablesStableBuffer } from '../dist/features/tables-estimate-stable-buffer.js';
export default function () { assert.equal(estimateTablesStableBuffer([2, 4, 6, 8]), 6); }
