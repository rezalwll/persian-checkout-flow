import assert from 'node:assert/strict';
import { calculateSearchStableBuffer } from '../dist/features/search-calculate-stable-buffer.js';
export default function () { assert.equal(calculateSearchStableBuffer([2, 4, 6, 8]), 20); }
