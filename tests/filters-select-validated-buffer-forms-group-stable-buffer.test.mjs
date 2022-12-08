import assert from 'node:assert/strict';
import { groupFormsStableBuffer } from '../dist/features/forms-group-stable-buffer.js';
export default function () { assert.equal(groupFormsStableBuffer([2, 4, 6, 8]), 20); }
