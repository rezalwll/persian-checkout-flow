import assert from 'node:assert/strict';
import { classifySearchScopedBuffer } from '../dist/features/search-classify-scoped-buffer.js';
export default function () { assert.equal(classifySearchScopedBuffer([2, 4, 6, 8]), 20); }
