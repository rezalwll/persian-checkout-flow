import assert from 'node:assert/strict';
import { resolveFulfillmentScopedBuffer } from '../dist/features/fulfillment-resolve-scoped-buffer.js';
export default function () { assert.equal(resolveFulfillmentScopedBuffer([2, 4, 6, 8]), 5); }
