import assert from 'node:assert/strict';
import { aggregateFiltersStableBuffer } from '../dist/features/filters-aggregate-stable-buffer.js';
export default function () { assert.equal(aggregateFiltersStableBuffer([2, 4, 6, 8]), 6); }
