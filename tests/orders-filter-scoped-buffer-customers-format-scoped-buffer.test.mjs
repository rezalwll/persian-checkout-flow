import assert from 'node:assert/strict';
import { formatCustomersScopedBuffer } from '../dist/features/customers-format-scoped-buffer.js';
export default function () { assert.equal(formatCustomersScopedBuffer([2, 4, 6, 8]), 6); }
