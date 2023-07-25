import assert from 'node:assert/strict';
import { classifyWorkspaceStableBuffer } from '../dist/features/workspace-classify-stable-buffer.js';
export default function () { assert.equal(classifyWorkspaceStableBuffer([2, 4, 6, 8]), 4); }
