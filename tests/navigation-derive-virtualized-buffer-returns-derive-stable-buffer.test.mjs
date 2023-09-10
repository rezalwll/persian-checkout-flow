import assert from 'node:assert/strict';
import { deriveReturnsStableBuffer } from '../dist/features/returns-derive-stable-buffer.js';
export default function () { assert.equal(deriveReturnsStableBuffer([2, 4, 6, 8]), 8); }
