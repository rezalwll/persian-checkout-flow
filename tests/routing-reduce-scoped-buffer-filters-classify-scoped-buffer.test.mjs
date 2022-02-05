import assert from 'node:assert/strict';
import { classifyFiltersScopedBuffer } from '../dist/features/filters-classify-scoped-buffer.js';
export default function () { assert.equal(classifyFiltersScopedBuffer([2, 4, 6, 8]), 4); }
