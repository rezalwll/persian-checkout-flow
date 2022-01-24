import assert from 'node:assert/strict';
import { aggregateCheckoutScopedBuffer } from '../dist/features/checkout-aggregate-scoped-buffer.js';
export default function () { assert.equal(aggregateCheckoutScopedBuffer([2, 4, 6, 8]), 4); }
