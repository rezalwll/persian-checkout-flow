import assert from 'node:assert/strict';
import { groupValidationScopedBuffer } from '../dist/features/validation-group-scoped-buffer.js';
export default function () { assert.equal(groupValidationScopedBuffer([2, 4, 6, 8]), 4); }
