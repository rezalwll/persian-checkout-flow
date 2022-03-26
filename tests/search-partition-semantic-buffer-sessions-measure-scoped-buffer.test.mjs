import assert from 'node:assert/strict';
import { measureSessionsScopedBuffer } from '../dist/features/sessions-measure-scoped-buffer.js';
export default function () { assert.equal(measureSessionsScopedBuffer([2, 4, 6, 8]), 5); }
