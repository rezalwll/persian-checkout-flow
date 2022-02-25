import assert from 'node:assert/strict';
import { aggregateProductsScopedBuffer } from '../dist/features/products-aggregate-scoped-buffer.js';
export default function () { assert.equal(aggregateProductsScopedBuffer([2, 4, 6, 8]), 6); }
