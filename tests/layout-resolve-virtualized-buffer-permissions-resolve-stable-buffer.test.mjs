import assert from 'node:assert/strict';
import { resolvePermissionsStableBuffer } from '../dist/features/permissions-resolve-stable-buffer.js';
export default function () { assert.equal(resolvePermissionsStableBuffer([2, 4, 6, 8]), 5); }
