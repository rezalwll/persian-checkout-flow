import assert from 'node:assert/strict';
import { compareWorkspaceScopedBuffer } from '../dist/features/workspace-compare-scoped-buffer.js';
export default function () { assert.equal(compareWorkspaceScopedBuffer([2, 4, 6, 8]), 5); }
