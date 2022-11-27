import assert from 'node:assert/strict';
import { filterCustomersStableBuffer } from '../dist/features/customers-filter-stable-buffer.js';
export default function () { assert.equal(filterCustomersStableBuffer([2, 4, 6, 8]), 60); }
