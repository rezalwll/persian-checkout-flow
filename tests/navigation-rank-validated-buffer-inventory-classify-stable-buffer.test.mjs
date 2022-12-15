import assert from 'node:assert/strict';
import { classifyInventoryStableBuffer } from '../dist/features/inventory-classify-stable-buffer.js';
export default function () { assert.equal(classifyInventoryStableBuffer([2, 4, 6, 8]), 20); }
