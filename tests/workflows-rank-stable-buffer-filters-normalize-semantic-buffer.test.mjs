import assert from 'node:assert/strict';
import { normalizeFiltersSemanticBuffer } from '../dist/features/filters-normalize-semantic-buffer.js';
export default function () { assert.equal(normalizeFiltersSemanticBuffer([2, 4, 6, 8]), 2); }
