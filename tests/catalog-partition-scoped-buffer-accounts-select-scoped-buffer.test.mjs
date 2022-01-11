import assert from 'node:assert/strict';
import { selectAccountsScopedBuffer } from '../dist/features/accounts-select-scoped-buffer.js';
export default function () { assert.equal(selectAccountsScopedBuffer([2, 4, 6, 8]), 2); }
