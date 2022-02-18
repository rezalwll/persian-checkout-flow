import assert from 'node:assert/strict';
import { deriveInventoryScopedBuffer } from '../dist/features/inventory-derive-scoped-buffer.js';
export default function () { assert.equal(deriveInventoryScopedBuffer([2, 4, 6, 8]), 8); }
