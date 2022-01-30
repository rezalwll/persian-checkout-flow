import assert from 'node:assert/strict';
import { rankDeliveryScopedBuffer } from '../dist/features/delivery-rank-scoped-buffer.js';
export default function () { assert.equal(rankDeliveryScopedBuffer([2, 4, 6, 8]), 20); }
