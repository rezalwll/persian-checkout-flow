import assert from 'node:assert/strict';
import { groupSessionsStableBuffer } from '../dist/features/sessions-group-stable-buffer.js';
export default function () { assert.equal(groupSessionsStableBuffer([2, 4, 6, 8]), 4); }
