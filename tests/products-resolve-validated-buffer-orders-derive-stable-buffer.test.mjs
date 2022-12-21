import assert from 'node:assert/strict';
import { deriveOrdersStableBuffer } from '../dist/features/orders-derive-stable-buffer.js';
export default function () { assert.equal(deriveOrdersStableBuffer([2, 4, 6, 8]), 2); }
